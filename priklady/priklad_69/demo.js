/*  69/ Node.js - modul FileSystem
    
    Pozor, tento příklad nebude fungovat mimo prostředí Node.js

*/

// Následuje výpis souboru main.js:

let http = require('http');
let fs = require('fs');
let hostname = '127.0.0.1';
let port = 3000;
let server = http.createServer((req, res) => {
  fs.readFile('odpoved.html', (err, data) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();
  });
});
server.listen(port, hostname, () => {
  console.log(`Aplikace běží na adrese http://${hostname}:${port}/`)
});