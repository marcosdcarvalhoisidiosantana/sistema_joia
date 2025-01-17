const { ipcRenderer } = require('electron')


// Listener para os botoes

document.getElementById('prod-btn').addEventListener('click', () => {
    ipcRenderer.send('trocar-pagina','JanelaProduto/prod.html');
});

document.getElementById('relatorio-btn').addEventListener('click', () => {
    ipcRenderer.send('trocar-pagina','JanelaRelatorio/relatorio.html');
});

document.getElementById('estoque-btn').addEventListener('click', () => {
    ipcRenderer.send('trocar-pagina','JanelaEstoque/estoque.html');
});