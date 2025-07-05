// server.js
import { createServer } from 'http';
import { readFile } from 'fs';
import { extname } from 'path';

const PORT = 3001;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.js': 'application/javascript',
  '.ico': 'image/x-icon'
};

const server = createServer((req, res) => {
  console.log(`Requested URL: ${req.url}`);

  let filePath = '.' + req.url;
  if (filePath === './') filePath = './index.html';

  const ext = String(extname(filePath)).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
