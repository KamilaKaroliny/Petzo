// Criação de um template HTML para o Web Component
const template = document.createElement('template');

template.innerHTML = `
  <!-- Importa o CSS do componente -->
  <link rel="stylesheet" href="${new URL('./banner.css', import.meta.url).href}">

  <!-- Importa ícones do Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

  <!-- Estrutura do banner -->
  <section class="banner">
      <div class="carrossel">

          <!-- Onde os slides serão inseridos dinamicamente -->
          <div class="slides"></div>

          <!-- Botão anterior -->
          <button class="anterior">
              <i class="fa-solid fa-chevron-left"></i>
          </button>

          <!-- Botão próximo -->
          <button class="proximo">
              <i class="fa-solid fa-chevron-right"></i>
          </button>

      </div>
  </section>
`;

// Criação do Web Component personalizado
class BannerComponent extends HTMLElement {
  constructor() {
    super();

    // Cria Shadow DOM (isolamento de estilos e HTML)
    this.attachShadow({ mode: 'open' });

    // Clona o template para dentro do componente
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // Lista de banners (imagens + links)
    const banners = [
      { imagem: "../assets/images/banners/brinquedos.png", link: "../public/brinquedos.html" },
      { imagem: "../assets/images/banners/aves.png", link: "../public/aves.html" },
      { imagem: "../assets/images/banners/acessorios.png", link: "../public/acessorios.html" },
      { imagem: "../assets/images/banners/aquaticos.png", link: "../public/aquaticos.html" },
      { imagem: "../assets/images/banners/cashback.png", link: "#" },
      { imagem: "../assets/images/banners/cupom.png", link: "#" },
      { imagem: "../assets/images/banners/frete.png", link: "#" },
      { imagem: "../assets/images/banners/racao.png", link: "../public/racao.html" },
      { imagem: "../assets/images/banners/roedores.png", link: "../public/roedores.html" }
    ];

    // Seleciona o container dos slides dentro do Shadow DOM
    const slides = this.shadowRoot.querySelector(".slides");

    // Gera os slides dinamicamente com base no array
    slides.innerHTML = banners
      .map(b => `
        <a href="${b.link}">
          <img src="${b.imagem}" alt="banner">
        </a>
      `)
      .join("");

    // Índice do slide atual
    let index = 0;

    // Função que atualiza a posição do carrossel
    const atualizar = () => {
      slides.style.transform = `translateX(-${index * 100}%)`;
    };

    // Botão "próximo"
    this.shadowRoot.querySelector(".proximo").onclick = () => {
      index = (index + 1) % banners.length; // volta ao início ao chegar no final
      atualizar();
    };

    // Botão "anterior"
    this.shadowRoot.querySelector(".anterior").onclick = () => {
      index = (index - 1 + banners.length) % banners.length; // loop reverso
      atualizar();
    };

    // Auto slide (troca automática a cada 4 segundos)
    setInterval(() => {
      index = (index + 1) % banners.length;
      atualizar();
    }, 4000);
  }
}

// Registra o componente como <app-banner>
customElements.define('app-banner', BannerComponent);