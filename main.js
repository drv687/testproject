const electron = require('electron')
const {app, BrowserWindow} = electron



 // Creates the browser window.
app.on('ready',() => {
var theWindow = new BrowserWindow({width: 800, height: 600});
  //Load app index.html
 theWindow.loadURL('file://' + __dirname + '/index.html')
  theWindow.webContents.openDevTools()
})
exports.openWindow = () => {
var theWindow = new BrowserWindow({width: 600, height: 400});
	theWindow.loadURL('file://' +_dirname + '/newone.html')
}