/*
 * --------------------------------------------------------------------------
 * Electron - tvorba binárního souboru pro distribuci aplikace 
 * v electron-packager
 * Pozor, tento příklad nebude fungovat mimo prostředí Electron
 * --------------------------------------------------------------------------
 * package.json
 */

{
  "name": "zakladni-electron-aplikace",
    "productName": "zakladni-electron-aplikace",
      "version": "1.0.0",
        "description": "Základní Electron aplikace",
          "main": "main.js",
            "scripts": {
    "start": "electron .",
      "package-mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --prune=true --out=release",
        "package-win": "electron-packager . --overwrite --asar=true --platform=win32 --arch=ia32 --prune=true --out=release --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"zakladni-electron-aplikace\"",
          "package-linux": "electron-packager . zakladni-electron-aplikace --overwrite --asar=true --platform=linux --arch=x64 --prune=true --out=release"
  },
  "repository": "",
    "keywords": [
      "Electron"
    ],
      "author": "autor",
        "license": "CC0-1.0",
          "devDependencies": {
    "electron": "^7.0.1",
      "electron-packager": "^14.1.0"
  }
}