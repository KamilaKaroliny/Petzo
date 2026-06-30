// Cria um template HTML reutilizável para o Web Component
const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="${new URL("./header.css", import.meta.url).href}">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

<header>

    <div class="topo">

        <!-- Botão do menu (hambúrguer) -->
        <button class="btn-menu" aria-label="Abrir menu">
            <i class="fa-solid fa-bars"></i>
        </button>

        <!-- Logo da aplicação -->
        <img src="../assets/images/logo.png" alt="Petzo" class="logo">

        <!-- Link para perfil do usuário -->
        <a href="perfil.html" class="perfil" aria-label="Perfil">
            <i class="fa-regular fa-circle-user"></i>
        </a>

    </div>

    <!-- Barra de pesquisa -->
    <div class="pesquisa">

        <input
            type="text"
            id="pesquisa"
            placeholder="Pesquisar produtos...">

        <!-- Ícone de lupa -->
        <i class="fa-solid fa-magnifying-glass"></i>

    </div>

</header>
`;

// Criação do Web Component
class HeaderComponent extends HTMLElement {

    constructor() {
        super();

        // Cria Shadow DOM (isolamento do componente)
        this.attachShadow({ mode: "open" });

        // Insere o template dentro do Shadow DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {

        // Captura o botão do menu dentro do Shadow DOM
        const botaoMenu = this.shadowRoot.querySelector(".btn-menu");

        // Evento de clique no menu
        botaoMenu.addEventListener("click", () => {

            // Busca o componente do menu na página (fora do shadow DOM)
            const menu = document.querySelector("app-secao");

            // Se existir, chama o método abrir()
            if (menu) {
                menu.abrir();
            }

        });

    }
}

// Registra o componente como <app-header>
customElements.define("app-header", HeaderComponent);