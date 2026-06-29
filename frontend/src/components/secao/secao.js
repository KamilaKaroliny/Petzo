const template = document.createElement("template");

template.innerHTML = `

<link rel="stylesheet"
href="${new URL("./secao.css", import.meta.url).href}">

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

<div class="overlay"></div>

<aside class="menu">

    <div class="topo">

        <button class="btn-voltar">

            <i class="fa-solid fa-arrow-left"></i>

        </button>

    </div>

    <nav>

        <a href="brinquedos.html">
            Brinquedos
            <i class="fa-solid fa-chevron-right"></i>
        </a>

        <a href="racao.html">
            Ração
            <i class="fa-solid fa-chevron-right"></i>
        </a>

        <a href="camas.html">
            Camas
            <i class="fa-solid fa-chevron-right"></i>
        </a>

        <a href="acessorios.html">
            Acessórios
            <i class="fa-solid fa-chevron-right"></i>
        </a>

        <a href="aquaticos.html">
            Aquáticos
            <i class="fa-solid fa-chevron-right"></i>
        </a>

        <a href="roedores.html">
            Roedores
            <i class="fa-solid fa-chevron-right"></i>
        </a>

        <a href="aves.html">
            Aves
            <i class="fa-solid fa-chevron-right"></i>
        </a>

    </nav>

</aside>

`;

class SecaoComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
        this.shadowRoot.querySelector(".overlay")
        .onclick=()=>this.fechar();
        this.shadowRoot.querySelector(".btn-voltar")
        .onclick=()=>this.fechar();
    }

    abrir(){
        this.classList.add("open");
    }

    fechar(){
        this.classList.remove("open");
    }

}

customElements.define("app-secao",SecaoComponent);