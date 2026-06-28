const container = document.getElementById("categorias");

const categorias = {};

PRODUTOS.forEach(produto => {

    if (!categorias[produto.categoria]) {

        categorias[produto.categoria] = {
            titulo: produto.categoriaLabel,
            produtos: []
        };

    }

    categorias[produto.categoria].produtos.push(produto);

});

Object.values(categorias).forEach(categoria => {

    const section = document.createElement("section");

    section.className = "categoria";

    section.innerHTML = `
<h2>${categoria.titulo}</h2>
<div class="grid"></div>
`;

    const grid = section.querySelector(".grid");

    categoria.produtos.forEach(produto => {

        grid.innerHTML += `

<div class="card"
onclick="location.href='produto.html?id=${produto.id}'">

<img src="${produto.imagem}" alt="${produto.nome}">

</div>

`;

    });

    container.appendChild(section);

});

const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("keyup", () => {

    const texto = pesquisa.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {

        const img = card.querySelector("img").alt.toLowerCase();

        card.style.display = img.includes(texto) ? "flex" : "none";

    });

});