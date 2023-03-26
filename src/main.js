const electronApp = require('electron').app;
const electronBrowserWindow = require('electron').BrowserWindow;
const electronDialog = require('electron').dialog;
const electronIpcMain = require('electron').ipcMain;

const nodePath = require("path");

function createWindow() {
    const window = new electronBrowserWindow({
        x: 0,
        y: 0,
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: nodePath.join(__dirname, 'preload.js')
        }
    });

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

// ---

// Only pass in a valid defaultPath
let defaultPath = '/home/danzav'; // Ubuntu
// let defaultPath = 'C:\\Users\\user\\invalid\\path'; // Windows

electronIpcMain.handle('openFileDialog', () => {
    // Dialog options
    let options = {
        title: 'Browse mapped drive',
        defaultPath: defaultPath,
        properties: ['openFile', 'multiSelections']
    };

    // Open dialog
    return electronDialog.showOpenDialog(window, options)
        .then((result) => {
            // Bail early if user cancelled dialog
            if (result.canceled) { return }

            return result.filePaths;
        })
})
