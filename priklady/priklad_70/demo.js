/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *  
 *  Node.js - tvorba vlastních modulů
 *  Pozor, tento příklad nebude fungovat mimo prostředí Node.js
 * 
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *  main.js
 */

let http = require('http');                               // načtení modulu HTTP
let pm = require('./pozdrav_module');                     // načtení našeho modulu
let hostname = '127.0.0.1';                               // nastavení adresy místního počítače (localhost)
let port = 3000;                                          // nastavení portu (doporučené od 1025 do 65535)

// konfigurace serveru
let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(pm.pozdrav());                                // generování odpovědi z našeho modulu
  res.end();
});

// spuštění serveru
server.listen(port, hostname, () => {
  console.log(`Aplikace běží na adrese http://${hostname}:${port}/`)
});

/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *  pozdrav_module.js
 */

module.exports.pozdrav = function () {
  return "Posílám Vám srdečné pozdravy z modulu!";
}