#!/usr/bin/env node
// scripts/find-free-port.js
// Usage: node scripts/find-free-port.js 8081
import net from 'node:net';

const startPort = parseInt(process.argv[2] || process.env.DEV_PORT || '8081', 10);

function findFreePort(port) {
  return new Promise((resolve) => {
    const server = net.createServer()
      .once('error', (err) => {
        try { server.close(); } catch (e) {}
        // If address in use or other error, try next port
        resolve(findFreePort(port + 1));
      })
      .once('listening', () => {
        server.close(() => resolve(port));
      })
      .listen(port, '127.0.0.1');
  });
}

const port = await findFreePort(startPort);
// Print the chosen port to stdout so it can be captured by callers
process.stdout.write(String(port));

