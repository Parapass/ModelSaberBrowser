const { app, BrowserWindow } = require('electron');
const nativeImage = require('electron').nativeImage;
app.commandLine.appendSwitch('enable-transparent-visuals');



function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      frame: true
    }
  })
  
  win.removeMenu()
  win.loadURL('https://modelsaber.com');
  win.setIcon('icon.ico');
}

app.whenReady().then(createWindow)

