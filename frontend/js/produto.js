
const idProduto =
Number(
localStorage.getItem(
"produtoSelecionado"
));

const produto =
produtos.find(
p => p.id === idProduto
);

const nome =
document.getElementById(
"nomeProduto"
);

const preco =
document.getElementById(
"precoProduto"
);

const descricao =
document.getElementById(
"descricaoProduto"
);

const imagemPrincipal =
document.getElementById(
"imagemPrincipal"
);

const miniaturas =
document.getElementById(
"miniaturas"
);

nome.textContent =
produto.nome;

preco.textContent =
`R$ ${produto.preco.toFixed(2)}`;

descricao.textContent =
produto.descricao;

imagemPrincipal.src =
produto.imagens[0];

produto.imagens.forEach(imagem => {

    const img =
    document.createElement("img");

    img.src = imagem;

    img.addEventListener(
    "click",
    () => {

        imagemPrincipal.src =
        imagem;

    });

    miniaturas.appendChild(img);

});

document
.getElementById("btnFrete")
.addEventListener(
"click",
() => {

    const cep =
    document
    .getElementById("cep")
    .value;

    const resultado =
    document
    .getElementById(
    "resultadoFrete"
    );

    if(cep.length < 8){

        resultado.textContent =
        "CEP inválido.";

        return;
    }

    resultado.textContent =
    "Frete estimado: R$ 12,90";

});

document
.getElementById("btnFavorito")
.addEventListener(
"click",
() => {

    let favoritos =
    JSON.parse(
    localStorage.getItem(
    "favoritos"
    )) || [];

    if(
    !favoritos.includes(
    produto.id
    )
    ){

        favoritos.push(
        produto.id
        );

        localStorage.setItem(
        "favoritos",

        JSON.stringify(
        favoritos
        )
        );

        alert(
        "Produto favoritado!"
        );

    }

});

document
.getElementById("btnCarrinho")
.addEventListener(
"click",
() => {

    let carrinho =
    JSON.parse(
    localStorage.getItem(
    "carrinho"
    )) || [];

    carrinho.push(produto.id);

    localStorage.setItem(

        "carrinho",

        JSON.stringify(
        carrinho
        )

    );

    alert(
    "Produto adicionado ao carrinho!"
    );

});

const relacionados =
produtos.filter(
p =>
p.categoria ===
produto.categoria
&&
p.id !== produto.id
);

const areaRelacionados =
document.getElementById(
"produtosRelacionados"
);

relacionados.forEach(item => {

    areaRelacionados.innerHTML += `

    <div
    class="relacionado"

    onclick="abrirProduto(${item.id})">

        <img src="${item.imagens[0]}">

        <p>${item.nome}</p>

    </div>

    `;

});

function abrirProduto(id){

    localStorage.setItem(
    "produtoSelecionado",
    id
    );

    location.reload();
}