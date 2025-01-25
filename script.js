// script.js

// Função para exibir uma mensagem de boas-vindas
function showWelcomeMessage() {
    alert("Bem-vindo ao Harri Bot!");
}

// Função para adicionar um evento de clique ao botão "Me adicione"
function addButtonClickEvent() {
    const button = document.querySelector('.conteudo-principal-escrito-botao');
    button.addEventListener('click', function() {
        alert("Obrigado por adicionar o Harri Bot!");
    });
}

// Chama as funções quando a página é carregada
window.onload = function() {
    showWelcomeMessage();
    addButtonClickEvent();
};
