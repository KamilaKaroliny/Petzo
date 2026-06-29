const template = document.createElement('template');

template.innerHTML = `
  <link rel="stylesheet" href="${new URL('./banner.css', import.meta.url).href}">

  <section class="banner">
      <div class="carrossel">

          <div class="slides"></div>

          <button class="anterior">
              <i class="fa-solid fa-chevron-left"></i>
          </button>

          <button class="proximo">
              <i class="fa-solid fa-chevron-right"></i>
          </button>

      </div>
  </section>
`;

class BannerComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const banners = [
        { imagem: "../assets/images/banners/brinquedos.png", link: "../../../public/brinquedos.html" },
        { imagem: "../assets/images/banners/aves.png", link: "aves.html" },
        { imagem: "../assets/images/banners/acessorios.png", link: "acessorios.html" },
        { imagem: "../assets/images/banners/aquaticos.png", link: "aquaticos.html" },
        { imagem: "../assets/images/banners/cashback.png", link: "#" },
        { imagem: "../assets/images/banners/cupom.png", link: "#" },
        { imagem: "../assets/images/banners/frete.png", link: "#" },
        { imagem: "../assets/images/banners/racao.png", link: "racao.html" },
        { imagem: "../assets/images/banners/roedores.png", link: "roedores.html" }
    ];

    const slides = this.shadowRoot.querySelector(".slides");

    banners.forEach(img => {
      slides.innerHTML += `<img src="${img}">`;
    });

    let index = 0;

    const atualizar = () => {
      slides.style.transform = `translateX(-${index * 100}%)`;
    };

    this.shadowRoot.querySelector(".proximo").onclick = () => {
      index = (index + 1) % banners.length;
      atualizar();
    };

    this.shadowRoot.querySelector(".anterior").onclick = () => {
      index = (index - 1 + banners.length) % banners.length;
      atualizar();
    };

    setInterval(() => {
      index = (index + 1) % banners.length;
      atualizar();
    }, 4000);
  }
}

customElements.define('app-banner', BannerComponent);