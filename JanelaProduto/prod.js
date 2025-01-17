const { ipcRenderer } = require('electron');


document.getElementById('voltar-btn').addEventListener('click', () => {
    ipcRenderer.send('trocar-pagina','./index.html');
});