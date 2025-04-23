document.addEventListener("DOMContentLoaded", function () {
    const campoBusca = document.getElementById("campoBusca");
    const botaoBusca = document.getElementById("botaoBusca");
    const mensagem = document.getElementById("mensagemBusca");

    if (campoBusca && botaoBusca && mensagem) {
        botaoBusca.addEventListener("click", function (event) {
            event.preventDefault();
            const termo = campoBusca.value.trim();
            if (termo) {
                mensagem.textContent = `Você buscou por: '${termo}'`;
            } else {
            mensagem.textContent = "";
            }
    });
    }
});