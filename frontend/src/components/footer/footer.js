const template = document.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="${new URL("./footer.css", import.meta.url).href}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

  <footer>

    <a href="home.html">
      <i class="fa-solid fa-house"></i>
    </a>

    <a href="carrinho.html">
      <i class="fa-solid fa-cart-shopping"></i>
    </a>

    <a href="notificacoes.html">
      <i class="fa-regular fa-bell"></i>
    </a>

    <a href="favoritos.html">
      <i class="fa-regular fa-heart"></i>
    </a>

  </footer>
`;

class FooterComponent extends HTMLElement {

  constructor() {

    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const paginaAtual = window.location.pathname.split("/").pop();

    this.shadowRoot.querySelectorAll("a").forEach(link => {

      if (link.getAttribute("href") === paginaAtual) {
        link.classList.add("ativo");
      }

    });

  }

}

customElements.define("app-footer", FooterComponent);