/*  68/ Program pro Node.js
    
    Pozor, tento příklad nebude fungovat mimo prostředí Node.js
    
*/

let http = require('http');
let hostname = '127.0.0.1';
let port = 3000;
let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Ahoj! Node.js!');
})
server.listen(port, hostname, () => {
  console.log(`Aplikace běží na adrese http://${hostname}:${port}/`)
})