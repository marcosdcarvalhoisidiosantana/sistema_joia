const { contextBridge, ipcRenderer } = require('electron');

// Expor funções específicas ao contexto do navegador
contextBridge.exposeInMainWorld('api', {
  requireRenderer: () => require('./renderer.js'),
  requireProd: () => require('./JanelaProduto/prod.js'),
  requireRelatorio: () => require('./JanelaRelatorio/relatorio.js'),
  requireEstoque: () => require('./JanelaEstoque/estoque.js')

});