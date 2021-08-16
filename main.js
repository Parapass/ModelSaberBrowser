const { app, BrowserWindow } = require('electron');
const nativeImage = require('electron').nativeImage;
app.commandLine.appendSwitch('enable-transparent-visuals');



function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1280,
    height: 720,
    transparent: true,
    webPreferences: {
      frame: false
    }
  })
  
  win.removeMenu()
  win.loadURL('https://modelsaber.com');
  win.setIcon('/browser/icon.ico');
}

app.whenReady().then(createWindow)

