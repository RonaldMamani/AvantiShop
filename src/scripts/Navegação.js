document.addEventListener("DOMContentLoaded", function () {
    // Para o menu de navegação (Hamburger)
    const botaoHamburger = document.getElementById("hamburger");
    const submenuNavegacao = document.getElementById("Navegacao");

    if (botaoHamburger && submenuNavegacao) {
        botaoHamburger.addEventListener("click", () => {
            if (window.innerWidth < 1024) {
                submenuNavegacao.classList.toggle("flex");
                submenuNavegacao.classList.toggle("hidden");
            }
        });
    }

    // Para o menu de categorias
    const botaoCategorias = document.getElementById("Categorias");
    const submenuCategorias = document.getElementById("MenuCategorias");
    
    if (botaoCategorias && submenuCategorias) {
        botaoCategorias.addEventListener("click", () => {
            if (window.innerWidth < 1024) {
                submenuCategorias.classList.toggle("flex");
                submenuCategorias.classList.toggle("hidden");
            }
        });
    }

    // Para o menu de departamento
    const departamentos = [
        { botaoId: "Departamento1", submenuId: "MenuDepartamento1" },
        { botaoId: "Departamento2", submenuId: "MenuDepartamento2" },
        { botaoId: "Departamento3", submenuId: "MenuDepartamento3" },
        { botaoId: "Departamento4", submenuId: "MenuDepartamento4" },
        { botaoId: "Departamento5", submenuId: "MenuDepartamento5" },
        { botaoId: "Departamento6", submenuId: "MenuDepartamento6" },
        { botaoId: "Departamento7", submenuId: "MenuDepartamento7" },
        { botaoId: "Departamento8", submenuId: "MenuDepartamento8" },
        { botaoId: "Departamento9", submenuId: "MenuDepartamento9" },
        { botaoId: "Departamento10", submenuId: "MenuDepartamento10" }
    ];
    
    departamentos.forEach(departamento => {
        const botao = document.getElementById(departamento.botaoId);
        const submenu = document.getElementById(departamento.submenuId);

        if (botao && submenu) {
            botao.addEventListener("click", () => {
                if (window.innerWidth < 1024) {
                    submenu.classList.toggle("flex");
                    submenu.classList.toggle("hidden");
                }
            });
        }
    });

    const departamentosNav = [
        { botaoId: "Dep-1", submenuId: "DepMenu1" },
        { botaoId: "Dep-2", submenuId: "DepMenu2" },
        { botaoId: "Dep-3", submenuId: "DepMenu3" },
        { botaoId: "Dep-4", submenuId: "DepMenu4" },
        { botaoId: "Dep-5", submenuId: "DepMenu5" },
        { botaoId: "Dep-6", submenuId: "DepMenu6" },
        { botaoId: "Dep-7", submenuId: "DepMenu7" },
        { botaoId: "Dep-8", submenuId: "DepMenu8" }
    ];

    departamentosNav.forEach(departamento => {
        const botao = document.getElementById(departamento.botaoId);
        const submenu = document.getElementById(departamento.submenuId);

        if (botao && submenu) {
            botao.addEventListener("click", () => {
                if (window.innerWidth < 1024) {
                    submenu.classList.toggle("flex");
                    submenu.classList.toggle("hidden");
                }
            });
        }
    });

});