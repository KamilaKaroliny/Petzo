const template = document.createElement('template');

template.innerHTML = `
  <link rel="stylesheet" href="${new URL('header.css', import.meta.url).href}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

  <header>

    <div class="topo">
        <i class="fa-solid fa-bars"></i>

        <img src="../assets/images/logo.png" alt="Petzo" class="logo">

        <a href="perfil.html">
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
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // aqui você pode adicionar eventos depois se quiser
  }
}

customElements.define('app-header', HeaderComponent);