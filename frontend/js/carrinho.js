// ==============================
// CARRINHO TEMPORÁRIO
// (Depois pode ser substituído por localStorage)
// ==============================

let carrinho = [
    {
        id: 1,
        nome: "Cama PET Vintage - Bege",
        imagem: "../assets/images/aquaticos/Alimentador Automático para Peixes.png",
        preco: 59.99,
        precoAntigo: 129.99,
        quantidade: 1
    }
];

// ==============================
// ELEMENTOS
// ==============================

const listaCarrinho = document.getElementById("lista-carrinho");
const subtotalElemento = document.getElementById("subtotal");
const quantidadeItens = document.getElementById("quantidade-itens");

// ==============================
// FORMATAR MOEDA
// ==============================

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// ==============================
// CALCULAR SUBTOTAL
// ==============================

function atualizarSubtotal() {

    let subtotal = 0;

    carrinho.forEach(produto => {
        subtotal += produto.preco * produto.quantidade;
    });

    subtotalElemento.textContent = formatarPreco(subtotal);

    quantidadeItens.textContent = carrinho.length;

}

// ==============================
// RENDERIZAR CARRINHO
// ==============================

function renderizarCarrinho() {

    listaCarrinho.innerHTML = "";

    carrinho.forEach(produto => {

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
            <span class="preco-antigo">
                ${formatarPreco(produto.precoAntigo)}
            </span>

            <span class="preco-atual">
                ${formatarPreco(produto.preco)}
            </span>
        </div>

    </div>

    <div class="quantidade">

        <button class="menos" data-id="${produto.id}">-</button>

        <span>${produto.quantidade}</span>

        <button class="mais" data-id="${produto.id}">+</button>

    </div>
`;

        listaCarrinho.appendChild(card);

    });

    adicionarEventos();

    atualizarSubtotal();

}

// ==============================
// EVENTOS DOS BOTÕES
// ==============================

function adicionarEventos() {

    document.querySelectorAll(".mais").forEach(botao => {

        botao.onclick = () => {

            const id = Number(botao.dataset.id);

            const produto = carrinho.find(p => p.id === id);

            produto.quantidade++;

            renderizarCarrinho();

        };

    });

    document.querySelectorAll(".menos").forEach(botao => {

        botao.onclick = () => {

            const id = Number(botao.dataset.id);

            const produto = carrinho.find(p => p.id === id);

            if (produto.quantidade > 1) {

                produto.quantidade--;

            } else {

                carrinho = carrinho.filter(p => p.id !== id);

            }

            renderizarCarrinho();

        };

    });

}

// ==============================
// INICIAR
// ==============================

renderizarCarrinho();