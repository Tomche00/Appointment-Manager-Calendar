#!/usr/bin/env node
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  console.log('Usage: node ./scripts/dev-rollover.js [basePort]');
  console.log('Starts the JSON API and Vite on the first free port starting at basePort (default 8081).');
  console.log('If DEV_PORT is set, it is used as the starting port.');
  process.exit(0);
}

const basePort = Number(args[0] || process.env.DEV_PORT || 8081);

function findFreePort(base) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, ['./scripts/find-free-port.js', String(base)], {
      stdio: ['ignore', 'pipe', 'inherit'],
    });
    let out = '';
    child.stdout.on('data', (chunk) => {
      out += chunk.toString();
    });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error('find-free-port exited with code ' + code));
        return;
      }
      resolve(Number(out.trim()));
    });
  });
}

async function backendIsRunning() {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/health');
    return response.ok;
  } catch {
    return false;
  }
}

async function startBackendIfNeeded() {
  if (await backendIsRunning()) {
    console.log('Using existing JSON API on port 3000');
    return null;
  }

  console.log('Starting JSON API on port 3000');
  return spawn(process.execPath, ['./server/index.js'], { stdio: 'inherit' });
}

async function main() {
  const port = await findFreePort(basePort);
  const backend = await startBackendIfNeeded();
  console.log(`Starting Vite on port ${port}`);
  const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  const child = spawn(cmd, ['vite'], {
    env: { ...process.env, DEV_PORT: String(port) },
    stdio: 'inherit',
  });

  const stopBackend = () => {
    if (backend && !backend.killed) backend.kill();
  };

  child.on('close', (code) => {
    stopBackend();
    process.exit(code ?? 0);
  });
  child.on('error', (err) => {
    stopBackend();
    console.error('Failed to start Vite:', err);
    process.exit(1);
  });

  process.on('SIGINT', () => {
    stopBackend();
    child.kill();
  });
  process.on('SIGTERM', () => {
    stopBackend();
    child.kill();
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
