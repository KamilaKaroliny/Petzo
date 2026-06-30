// Container principal onde as categorias serão inseridas na página
const container = document.getElementById("categorias");

// Objeto que vai agrupar produtos por categoria
const categorias = {};

// Percorre todos os produtos do array global PRODUTOS
PRODUTOS.forEach(produto => {

    // Se a categoria ainda não existe no objeto, cria ela
    if (!categorias[produto.categoria]) {

        categorias[produto.categoria] = {
            titulo: produto.categoriaLabel, // nome exibido da categoria
            produtos: [] // lista de produtos dessa categoria
        };

    }

    // Adiciona o produto dentro da categoria correspondente
    categorias[produto.categoria].produtos.push(produto);

});

// Converte o objeto de categorias em array e percorre cada uma
Object.values(categorias).forEach(categoria => {

    // Cria a section da categoria
    const section = document.createElement("section");

    section.className = "categoria";

    // Estrutura base da categoria (título + grid de produtos)
    section.innerHTML = `
        <h2>${categoria.titulo}</h2>
        <div class="grid"></div>
    `;

    // Seleciona o grid onde os produtos serão inseridos
    const grid = section.querySelector(".grid");

    // Percorre os produtos da categoria atual
    categoria.produtos.forEach(produto => {

        // Cria o card do produto e adiciona no grid
        grid.innerHTML += `
            <div class="card"
                onclick="location.href='produto.html?id=${produto.id}'">

                <!-- Imagem do produto -->
                <img src="${produto.imagem}" alt="${produto.nome}">

            </div>
        `;
    });

    // Adiciona a categoria pronta dentro da página
    container.appendChild(section);
});


// ===================== BUSCA =====================

// Input de pesquisa do header
const pesquisa = document.getElementById("pesquisa");

// Evento disparado sempre que o usuário digita
pesquisa.addEventListener("keyup", () => {

    // Texto digitado convertido para minúsculo
    const texto = pesquisa.value.toLowerCase();

    // Percorre todos os cards de produtos
    document.querySelectorAll(".card").forEach(card => {

        // Usa o "alt" da imagem como base de busca
        const img = card.querySelector("img").alt.toLowerCase();

        // Se o texto estiver no nome, mostra o card
        // Caso contrário, esconde o card
        card.style.display = img.includes(texto) ? "flex" : "none";

    });

});