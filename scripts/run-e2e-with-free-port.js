#!/usr/bin/env node
import { spawn } from 'child_process';
import http from 'http';

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  console.log('Usage: node ./scripts/run-e2e-with-free-port.js [basePort]');
  console.log('Finds a free port starting at basePort (default 8081), starts `npm run dev` on it, waits for readiness, runs Playwright, then shuts the dev server.');
  process.exit(0);
}

const basePort = args[0] ? Number(args[0]) : 8081;

function findFreePort(base) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, ['./scripts/find-free-port.js', String(base)], { stdio: ['ignore', 'pipe', 'inherit'] });
    let out = '';
    child.stdout.on('data', (d) => (out += d.toString()));
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) return resolve(Number(out.trim()));
      reject(new Error('find-free-port exited with code ' + code));
    });
  });
}

function waitForServer(port, timeout = 90000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    (function poll() {
      const req = http.request({ method: 'GET', hostname: 'localhost', port, path: '/', timeout: 2000 }, (res) => {
        // consider server ready for any response
        resolve();
      });
      req.on('error', () => {
        if (Date.now() - start > timeout) return reject(new Error('timeout waiting for server'));
        setTimeout(poll, 500);
      });
      req.end();
    })();
  });
}

function spawnDev(port) {
  const env = { ...process.env, DEV_PORT: String(port) };
  const cmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  return spawn(cmd, ['run', 'dev'], { env, stdio: 'inherit' });
}

function runPlaywright(port) {
  const env = { ...process.env, DEV_PORT: String(port) };
  const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  return spawn(cmd, ['playwright', 'test'], { env, stdio: 'inherit' });
}

try {
  const port = await findFreePort(basePort);
  console.log('Using port', port);

  const dev = spawnDev(port);

  try {
    console.log('Waiting for dev server to be ready...');
    await waitForServer(port);
  } catch (err) {
    console.error('Dev server did not become ready:', err);
    try { dev.kill(); } catch (e) {}
    process.exit(1);
  }

  const play = runPlaywright(port);
  play.on('close', (code) => {
    try { dev.kill(); } catch (e) {}
    process.exit(code ?? 0);
  });
  play.on('error', (err) => {
    console.error('Playwright error', err);
    try { dev.kill(); } catch (e) {}
    process.exit(1);
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
