const { app, BrowserWindow , ipcMain } = require('electron')
const path = require('node:path')

let mainWindow;

app.disableHardwareAcceleration();

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  })

  mainWindow.loadFile('index.html')

  mainWindow.webContents.openDevTools();

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Ouvir o evento de exibição do alerta
ipcMain.on('trocar-pagina', (event, novaPagina) => {
  const paginaPath = path.join(__dirname, novaPagina);
  mainWindow.loadFile(paginaPath); // Carrega a nova página
});


