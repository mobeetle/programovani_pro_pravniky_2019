/*
 * --------------------------------------------------------------------------
 * Node.js - modul FileSystem
 * Pozor, tento příklad nebude fungovat mimo prostředí Node.js
 * --------------------------------------------------------------------------
 */

// main.js

let http = require('http');     // načtení modulu HTTP
let fs = require('fs');         // načtení modulu FileSystem
let hostname = '127.0.0.1';     // nastavení adresy místního počítače (localhost)
let port = 3000;                // nastavení portu (doporučené od 1025 do 65535)

// konfigurace serveru
let server = http.createServer((req, res) => {
  fs.readFile('odpoved.html', (err, data) => {  // načtení souboru s odpovědí
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();
  });
});

// spuštění serveru
server.listen(port, hostname, () => {
  console.log(`Aplikace běží na adrese http://${hostname}:${port}/`)
});