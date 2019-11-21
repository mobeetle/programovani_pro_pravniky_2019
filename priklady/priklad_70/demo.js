/**
 * --------------------------------------------------------------------------
 * 70/ Node.js - tvorba vlastních modulů
 * Pozor, tento příklad nebude fungovat mimo prostředí Node.js
 * --------------------------------------------------------------------------
 */

//
// Následuje výpis souboru main.js:
//
let http = require('http');
let pm = require('./pozdrav_module');
let hostname = '127.0.0.1';
let port = 3000;
let server = http.createServer((req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.write(pm.pozdrav());
    res.end();
});
server.listen(port, hostname, () => {
    console.log(`Aplikace běží na adrese http://${hostname}:${port}/`)
});

//
// Následuje výpis souboru pozdrav_module.js:
//
module.exports.pozdrav = function(){
  return "Posílám Vám srdečné pozdravy z modulu!";
}