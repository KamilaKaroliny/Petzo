const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="${new URL("./header.css", import.meta.url).href}">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

<header>

    <div class="topo">

        <button class="btn-menu" aria-label="Abrir menu">
            <i class="fa-solid fa-bars"></i>
        </button>

        <img src="../assets/images/logo.png" alt="Petzo" class="logo">

        <a href="perfil.html" class="perfil" aria-label="Perfil">
            <i class="fa-regular fa-circle-user"></i>
        </a>

    </div>

    <div class="pesquisa">

        <input
            type="text"
            id="pesquisa"
            placeholder="Pesquisar produtos...">

        <i class="fa-solid fa-magnifying-glass"></i>

    </div>

</header>
`;

class HeaderComponent extends HTMLElement {

    constructor() {

        super();

        this.attachShadow({ mode: "open" });

        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }

    connectedCallback() {

        const botaoMenu = this.shadowRoot.querySelector(".btn-menu");

        botaoMenu.addEventListener("click", () => {

            const menu = document.querySelector("app-secao");

            if(menu){
                menu.abrir();
            }

        });

    }

}

customElements.define("app-header", HeaderComponent);