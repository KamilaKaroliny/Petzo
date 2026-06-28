document.addEventListener("DOMContentLoaded", iniciarBanner);

function iniciarBanner() {

    const banners = [
        { imagem: "../../../assets/images/banners/brinquedos.png", link: "../../../public/brinquedos.html" },
        { imagem: "../../../assets/images/banners/aves.png", link: "aves.html" },
        { imagem: "../../../assets/images/banners/acessorios.png", link: "acessorios.html" },
        { imagem: "../../../assets/images/banners/aquaticos.png", link: "aquaticos.html" },
        { imagem: "../../../assets/images/banners/cashback.png", link: "#" },
        { imagem: "../../../assets/images/banners/cupom.png", link: "#" },
        { imagem: "../../../assets/images/banners/frete.png", link: "#" },
        { imagem: "../../../assets/images/banners/racao.png", link: "racao.html" },
        { imagem: "../../../assets/images/banners/roedores.png", link: "roedores.html" }
    ];

    const slides = document.querySelector(".slides");

    banners.forEach(banner => {
        slides.innerHTML += `
            <a href="${banner.link}">
                <img src="${banner.imagem}">
            </a>
        `;
    });

    let indice = 0;

    function atualizar() {
        slides.style.transform = `translateX(-${indice * 100}%)`;
    }

    document.querySelector(".proximo").onclick = () => {
        indice = (indice + 1) % banners.length;
        atualizar();
    };

    document.querySelector(".anterior").onclick = () => {
        indice = (indice - 1 + banners.length) % banners.length;
        atualizar();
    };

    setInterval(() => {
        indice = (indice + 1) % banners.length;
        atualizar();
    }, 4000);
}