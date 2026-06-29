const container = document.getElementById("produtos-favoritos");
const quantidade = document.getElementById("quantidade");

carregarFavoritos();

function carregarFavoritos() {

    // Procura todos os produtos favoritados
    const favoritos = PRODUTOS.filter(produto =>
        localStorage.getItem("favorito_" + produto.id) === "sim"
    );

    quantidade.textContent = favoritos.length;

    if (favoritos.length === 0) {

        container.innerHTML = `
            <p class="vazio">
                Você ainda não possui produtos favoritados.
            </p>
        `;

        return;
    }

    container.innerHTML = "";

    favoritos.forEach(produto => {

        const card = document.createElement("div");
        card.className = "card";

        // Quando clicar no card (menos nos botões), abre a página do produto
        card.onclick = function(e){

            if(
                e.target.closest(".favorito") ||
                e.target.closest(".carrinho")
            ){
                return;
            }

            window.location.href = `produto.html?id=${produto.id}`;

        };

        card.innerHTML = `

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
                class="imagem-produto">

            <div class="acoes">

                <button class="favorito">
                    <i class="fa-solid fa-heart"></i>
                </button>

                <button class="carrinho">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>

            </div>

        `;

        // botão remover favorito
        card.querySelector(".favorito").onclick = function(e){

            e.stopPropagation();

            localStorage.removeItem("favorito_" + produto.id);

            carregarFavoritos();

        };

        // botão carrinho
        card.querySelector(".carrinho").onclick = function(e){

            e.stopPropagation();

            const carrinho =
                JSON.parse(localStorage.getItem("carrinho")) || [];

            carrinho.push(produto.id);

            localStorage.setItem(
                "carrinho",
                JSON.stringify(carrinho)
            );

            alert("Produto adicionado ao carrinho!");

        };

        container.appendChild(card);

    });

}