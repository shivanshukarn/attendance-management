const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('index.html');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html');
const script = fs.readFileSync('./script.js');
const studentData = fs.readFileSync('./studentData.json');

const server = http.createServer((req, res) => {

  console.log(req.url);
  url = req.url;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if (url == '/') {
    res.end(home);
  }
  else if (url == '/script.js') {
    res.setHeader('Content-Type', 'text/javascript');
    res.end(script);
  }
  else if (url == '/studentData.json') {
    res.setHeader('Content-Type', 'application/json');
    res.end(studentData);
  }
  else {
    res.statusCode = 404;
    res.end("<h1>404 Page not Found</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

