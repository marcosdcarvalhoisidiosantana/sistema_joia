const { ipcRenderer } = require('electron');

document.getElementById('voltar-btn').addEventListener('click', () => {
    ipcRenderer.send('trocar-pagina','./index.html');
});

document.getElementById('saida-btn').addEventListener('click', () => {
    const divSaida = document.getElementById('div-saida');
    const divEntrada = document.getElementById('div-entrada');
    const divLista = document.getElementById('div-lista');
    if (divSaida.style.display === "none" || divSaida.style.display === "") {
        divSaida.style.display = "block";
    }
    divEntrada.style.display = "none";
    divLista.style.display = "none";
});

document.getElementById('entrada-btn').addEventListener('click', () => {
    const divSaida = document.getElementById('div-saida');
    const divEntrada = document.getElementById('div-entrada');
    const divLista = document.getElementById('div-lista');
        
    if (divEntrada.style.display === "none" || divEntrada.style.display === "") {
        divEntrada.style.display = "block";
    }
    divSaida.style.display = "none";
    divLista.style.display = "none";
});

document.getElementById('lista-btn').addEventListener('click', () => {
    const divSaida = document.getElementById('div-saida');
    const divEntrada = document.getElementById('div-entrada');
    const divLista = document.getElementById('div-lista');
        
    if (divLista.style.display === "none" || divLista.style.display === "") {
        divLista.style.display = "block";
    }
    divSaida.style.display = "none";
    divEntrada.style.display = "none";
});