const electronApp = require('electron').app;
const electronBrowserWindow = require('electron').BrowserWindow;
const remoteMain = require('@electron/remote/main');
remoteMain.initialize();

const nodePath = require("path");

function createWindow() {
    const window = new electronBrowserWindow({
        x: 0,
        y: 0,
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        }
    });
    remoteMain.enable(window.webContents);
    window.loadFile('src/index.html')
        .then(() => { window.show(); });


    return window;
}

electronApp.on('ready', () => {

    window = createWindow();
});

electronApp.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electronApp.quit();
    }
});

electronApp.on('activate', () => {
    if (electronBrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

