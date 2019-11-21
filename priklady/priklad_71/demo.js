/**
 * --------------------------------------------------------------------------
 * 71/ Node.js - manažer balíčků NPM
 * Pozor, tento příklad nebude fungovat mimo prostředí Node.js
 * --------------------------------------------------------------------------
 */

//
// Následuje výpis souboru main.js:
//
let http = require('http');
let ucm = require('upper-case');
let hostname = '127.0.0.1';
let port = 3000;
let server = http.createServer((req, res) => { 
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end(ucm('Ahoj! Node.js!'));
})
server.listen(port, hostname, () => {
console.log(`Aplikace běží na adrese http://${hostname}:${port}/`)
});