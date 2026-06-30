// ==============================
// CARRINHO
// ==============================

const listaCarrinho = document.getElementById("lista-carrinho");
const subtotalElemento = document.getElementById("subtotal");
const quantidadeItens = document.getElementById("quantidade-itens");

// ==============================
// CARREGAR CARRINHO
// ==============================

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// ==============================
// CONVERTER PREÇO
// ==============================

function converterPreco(preco) {

    if (typeof preco === "number") return preco;

    return Number(
        preco
            .replace("R$", "")
            .replace(/\./g, "")
            .replace(",", ".")
            .trim()
    );

}

// ==============================
// FORMATAR PREÇO
// ==============================

function formatarPreco(valor) {

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}

// ==============================
// SALVAR
// ==============================

function salvarCarrinho() {

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

}

// ==============================
// PEGAR PRODUTO
// ==============================

function buscarProduto(id) {

    return PRODUTOS.find(p => p.id == id);

}

// ==============================
// SUBTOTAL
// ==============================

function atualizarSubtotal() {

    let subtotal = 0;
    let totalItens = 0;

    carrinho.forEach(item => {

        const produto = buscarProduto(item.id);
        if (!produto) return;

        const quantidade = item.quantidade || 1;
        const preco = converterPreco(produto.preco || 0);

        subtotal += preco * quantidade;
        totalItens += quantidade;

    });

    subtotalElemento.textContent = formatarPreco(subtotal);
    quantidadeItens.textContent = totalItens;
}

// ==============================
// RENDERIZAR
// ==============================

function renderizarCarrinho() {

    listaCarrinho.innerHTML = "";

    if (carrinho.length == 0) {

        listaCarrinho.innerHTML = `
            <p class="carrinho-vazio">
                Seu carrinho está vazio.
            </p>
        `;

        atualizarSubtotal();

        return;

    }

    carrinho.forEach(item => {

        const produto = buscarProduto(item.id);

        if (!produto) return;

        const card = document.createElement("div");

        card.className = "produto-carrinho";

        card.innerHTML = `

            <img
                src="${produto.imagem}"
                class="produto-imagem"
                alt="${produto.nome}">

            <div class="produto-info">

                <h3>${produto.nome}</h3>

                <div class="precos">

                    <span class="preco-atual">
                        ${produto.preco}
                    </span>

                </div>

            </div>

            <div class="quantidade">

                <button
                    class="menos"
                    data-id="${produto.id}">
                    -
                </button>

                <span>${item.quantidade}</span>

                <button
                    class="mais"
                    data-id="${produto.id}">
                    +
                </button>

            </div>

        `;

        listaCarrinho.appendChild(card);

    });

    adicionarEventos();

    atualizarSubtotal();

}

// ==============================
// EVENTOS
// ==============================

function adicionarEventos() {

    document.querySelectorAll(".mais").forEach(botao => {

        botao.onclick = () => {

            const id = botao.dataset.id;

            const item = carrinho.find(p => p.id == id);

            if (!item) return;

            item.quantidade++;

            salvarCarrinho();

            renderizarCarrinho();

        };

    });

    document.querySelectorAll(".menos").forEach(botao => {

        botao.onclick = () => {

            const id = botao.dataset.id;

            const item = carrinho.find(p => p.id == id);

            if (!item) return;

            if (item.quantidade > 1) {

                item.quantidade--;

            } else {

                carrinho = carrinho.filter(p => p.id != id);

            }

            salvarCarrinho();

            renderizarCarrinho();

        };

    });

}

// ==============================
// INICIAR
// ==============================

renderizarCarrinho();