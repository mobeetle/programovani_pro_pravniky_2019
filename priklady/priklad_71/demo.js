/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *  
 *  Node.js - manažer balíčků NPM
 *  Pozor, tento příklad nebude fungovat mimo prostředí Node.js
 * 
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *  main.js
 */

let http = require('http');                                 // načtení modulu HTTP
let ucm = require('upper-case');                            // načtení modulu upper-case
let hostname = '127.0.0.1';                                 // nastavení adresy místního počítače (localhost)
let port = 3000;                                            // nastavení portu (doporučené od 1025 do 65535)

// konfigurace serveru
let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(ucm('Ahoj! Node.js!'));                           // odeslání odpovědi transformované modulem upper-case
})

// spuštění serveru
server.listen(port, hostname, () => {
  console.log(`Aplikace běží na adrese http://${hostname}:${port}/`)
});

