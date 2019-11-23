/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 * 
 *  Electron - základní aplikace
 *  Pozor, tento příklad nebude fungovat mimo prostředí Electron
 * 
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *  main.js
 */

const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  mainWindow.loadFile('index.html');
  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *  preload.js
 */

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
});

/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *  renderer.js
 */

// zde si může čtenář doplnit kód dle ctěné libosti

/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *  package.json
 */

{
  "name": "zakladni-electron-aplikace",
    "version": "1.0.0",
      "description": "Základní Electron aplikace",
        "main": "main.js",
          "scripts": {
    "start": "electron ."
  },
  "repository": "",
    "keywords": [
      "Electron"
    ],
      "author": "autor",
        "license": "CC0-1.0",
          "devDependencies": {
    "electron": "^7.0.1"
  }