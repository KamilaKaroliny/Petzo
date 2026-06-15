export function createProductCard(produto){

    return `

    <a
    href="produto.html?produto=${produto.id}"
    class="product-card"
    >

        <img src="${produto.imagem}">

        <p>${produto.nome}</p>

    </a>

    `;
}