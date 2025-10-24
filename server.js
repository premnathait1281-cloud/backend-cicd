const http = require("http");

const hostname = "0.0.0.0";  // Allow external access (important for EC2)
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from ec2 Node.js Server in aws ubuntu!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
