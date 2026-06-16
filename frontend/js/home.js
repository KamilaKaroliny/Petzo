// ===== CARROSSEL =====

const banners = [

    "../src/assets/images/banners/banner1.png",

    "../src/assets/images/banners/banner2.png",

    "../src/assets/images/banners/banner3.png"

];

let bannerAtual = 0;

setInterval(() => {

    bannerAtual++;

    if(bannerAtual >= banners.length){

        bannerAtual = 0;
    }

    document
    .getElementById("banner")
    .src = banners[bannerAtual];

},3000);

// ===== PRODUTOS =====

const brinquedosContainer =
document.getElementById(
"brinquedos-container"
);

const camasContainer =
document.getElementById(
"camas-container"
);

const brinquedos =
produtos.filter(
produto =>
produto.categoria === "brinquedos"
);

const camas =
produtos.filter(
produto =>
produto.categoria === "camas"
);

renderizarProdutos(
brinquedos,
brinquedosContainer
);

renderizarProdutos(
camas,
camasContainer
);

function renderizarProdutos(
lista,
container
){

    lista.forEach(produto => {

        container.innerHTML += `

        <div
            class="produto"
            onclick="abrirProduto(${produto.id})"
        >

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

        </div>

        `;

    });

}

function abrirProduto(id){

    localStorage.setItem(
        "produtoSelecionado",
        id
    );

    window.location.href =
    "produto.html";
}