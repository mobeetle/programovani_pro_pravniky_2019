/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 * 
 *  Program pro Node.js
 *  Pozor, tento příklad nebude fungovat mimo prostředí Node.js
 * 
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *  main.js
 */

let http = require('http');                                   // načtení modulu HTTP
let hostname = '127.0.0.1';                                   // nastavení adresy místního počítače (localhost)
let port = 3000;                                              // nastavení portu (doporučené od 1025 do 65535)

// konfigurace serveru
let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Ahoj! Node.js!');
})

// spuštění serveru
server.listen(port, hostname, () => {
  console.log(`Aplikace běží na adrese http://${hostname}:${port}/`)
})

