const http = require('http');

const PORT = process.env.PORT || 1337;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<h1>Cloud Native Development in Node.js</h1>');
});

server.listen(PORT, () =>
  console.log(`Server started and is listening on port: ${PORT}`)
);
