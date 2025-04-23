document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("instituicao");
    const submenu = document.getElementById("menuInstitucional");

    if (botao && submenu) {
        botao.addEventListener("click", () => {
        if (window.innerWidth < 1024) {
            submenu.classList.toggle("flex");
            submenu.classList.toggle("hidden");
        }
    });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("Central");
    const submenu = document.getElementById("menuCentral");

    if (botao && submenu) {
        botao.addEventListener("click", () => {
        if (window.innerWidth < 1024) {
            submenu.classList.toggle("flex");
            submenu.classList.toggle("hidden");
        }
    });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("Atendimento");
    const submenu = document.getElementById("menuAtendimento");

    if (botao && submenu) {
        botao.addEventListener("click", () => {
        if (window.innerWidth < 1024) {
            submenu.classList.toggle("flex");
            submenu.classList.toggle("hidden");
        }
    });
    }
});