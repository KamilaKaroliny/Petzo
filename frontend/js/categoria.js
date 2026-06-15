const pagina = window.location.pathname
.split("/")
.pop()
.replace(".html","");

const titulo =
document.getElementById("tituloCategoria");

const grid =
document.getElementById("produtos");

titulo.innerText =
pagina.charAt(0).toUpperCase() +
pagina.slice(1);

const produtosCategoria =
produtos.filter(
produto =>
produto.categoria === pagina
);

grid.innerHTML = "";

produtosCategoria.forEach(produto => {

    grid.innerHTML += `
    
        <div
            class="card"
            onclick="abrirProduto(${produto.id})"
        >

            <img src="${produto.imagem}">

            <h3>${produto.nome}</h3>

            <p>
                R$ ${produto.preco.toFixed(2)}
            </p>

        </div>

    `;

});

function abrirProduto(id){

    localStorage.setItem(
        "produtoSelecionado",
        id
    );

    window.location.href =
    "produto.html";
}