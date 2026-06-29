const params = new URLSearchParams(window.location.search);
const idUrl = params.get("id");
const content = document.getElementById("page-content");

function obterCatalogoOriginal() {
  if (typeof PRODUTOS !== "undefined" && Array.isArray(PRODUTOS)) return PRODUTOS;
  if (typeof produtos !== "undefined" && Array.isArray(produtos)) return produtos;
  return [];
}

function formatarPreco(preco) {
  if (typeof preco === "number") return `R$ ${preco.toFixed(2).replace(".", ",")}`;
  return preco || "Preço não informado";
}

function primeiraImagem(produto) {
  if (produto.imagem) return produto.imagem;
  if (Array.isArray(produto.imagens) && produto.imagens.length > 0) return produto.imagens[0];
  return "";
}

function formatarCategoriaLabel(categoria, categoriaLabel) {
  if (categoriaLabel) return categoriaLabel;
  if (!categoria) return "Produtos";
  return categoria.charAt(0).toUpperCase() + categoria.slice(1);
}

function normalizarProduto(produto, indice) {
  const id = produto.id !== undefined && produto.id !== null ? String(produto.id) : `produto-${indice + 1}`;
  const categoria = produto.categoria || "produtos";
  return {
    id,
    nome: produto.nome || "Produto sem nome",
    preco: formatarPreco(produto.preco),
    descricao: produto.descricao || "Descrição não cadastrada.",
    imagem: primeiraImagem(produto),
    categoria,
    categoriaLabel: formatarCategoriaLabel(categoria, produto.categoriaLabel),
    original: produto
  };
}

const CATALOGO = obterCatalogoOriginal().map(normalizarProduto);

function corrigirCaminhoImagem(caminho) {
  if (!caminho) return "";
  if (caminho.startsWith("../") || caminho.startsWith("./") || caminho.startsWith("/") || caminho.startsWith("http") || caminho.startsWith("data:")) return caminho;
  return "../" + caminho;
}

function getProdutoByIdPagina(id) {
  if (!id) return null;
  const idTexto = String(id);
  const produtoEncontrado = CATALOGO.find(produto => produto.id === idTexto);
  if (produtoEncontrado) return produtoEncontrado;
  const mapaIdsAntigos = { "1": "mordedor-tranca", "2": "bolinha-porta-petiscos" };
  if (mapaIdsAntigos[idTexto]) return CATALOGO.find(produto => produto.id === mapaIdsAntigos[idTexto]) || null;
  return null;
}

function getProdutosByCategoriaPagina(categoria, excludeId, limit = 12) {
  return CATALOGO.filter(produto => produto.categoria === categoria && produto.id !== excludeId).slice(0, limit);
}

function montarCardProduto(produto) {
  return `
    <a class="catalog-card" href="produto.html?id=${produto.id}">
      <img src="${corrigirCaminhoImagem(produto.imagem)}" alt="${produto.nome}" loading="lazy">
      <h2>${produto.nome}</h2>
      <strong>${produto.preco}</strong>
    </a>`;
}

function mostrarCatalogo(mensagem = "") {
  document.title = "Petzo - Produtos";
  document.getElementById("btn-back").href = "home.html";
  localStorage.removeItem("produtoSelecionado");

  const aviso = mensagem ? `
    <div class="not-found">
      <h2>Produto não encontrado</h2>
      <p>${mensagem}</p>
      <a href="home.html">Voltar para a Home</a>
    </div>` : "";

  content.innerHTML = `
    ${aviso}
    <section class="catalog-section">
      <h1>Produtos Petzo</h1>
      <p>Clique em um produto para ver os detalhes.</p>
      <div class="catalog-grid">
        ${CATALOGO.map(montarCardProduto).join("")}
      </div>
    </section>`;
}

function mostrarErroCatalogo() {
  content.innerHTML = `
    <div class="not-found">
      <h2>Erro ao carregar produtos</h2>
      <p>Verifique se o arquivo <strong>produtos.js</strong> está dentro da pasta <strong>data</strong>.</p>
      <p>O caminho esperado é: <strong>frontend/data/produtos.js</strong></p>
      <a href="home.html">Voltar para a Home</a>
    </div>`;
}

function mostrarProduto(produto) {
  document.title = `Petzo - ${produto.nome}`;
  document.getElementById("btn-back").href = `${produto.categoria}.html`;

  const recomendados = getProdutosByCategoriaPagina(produto.categoria, produto.id, 12);

  const recHTML = recomendados.map(item => `
    <a class="rec-item" href="produto.html?id=${item.id}" title="${item.nome}">
      <img src="${corrigirCaminhoImagem(item.imagem)}" alt="${item.nome}" loading="lazy">
    </a>
  `).join("");

  content.innerHTML = `
    <nav class="breadcrumb" aria-label="Localização">
      <a href="home.html">Home</a>
      <span>›</span>
      <a href="${produto.categoria}.html">${produto.categoriaLabel}</a>
      <span>›</span>
      ${produto.nome}
    </nav>

    <main class="product-container">
      <div class="product-gallery">
        <div class="main-image-box">
          <img
            src="${corrigirCaminhoImagem(produto.imagem)}"
            alt="${produto.nome}"
            id="main-img"
            onerror="this.style.opacity='.3'; this.alt='Imagem indisponível'">
        </div>

        <div class="gallery-footer">
          <div class="pagination-dots">
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>

          <button
            class="wishlist-btn"
            id="wishlist-btn"
            type="button"
            aria-label="Adicionar aos favoritos"
            title="Adicionar aos favoritos">
          </button>
        </div>
      </div>

      <div class="product-details">
        <span class="product-category-badge">
          <span class="badge-icon">🏷</span>
          ${produto.categoriaLabel}
        </span>

        <h1 class="product-title">${produto.nome}</h1>

        <div class="product-price">${produto.preco}</div>

        <p class="product-description">${produto.descricao}</p>

        <div class="shipping-box">
          <div class="cep-input-wrapper">
            <label for="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              name="cep"
              placeholder="00000-000"
              maxlength="9">
          </div>

          <button class="btn-shipping" id="btn-shipping" type="button">
            Calcular frete
          </button>
        </div>

        <p class="shipping-result" id="shipping-result"></p>

        <button class="btn-add-to-cart" id="btn-add-to-cart" type="button">
          <span class="cart-icon">+</span>
          Adicionar ao Carrinho
        </button>
      </div>
    </main>

    <section class="recommendations">
      <h2 class="rec-title">Encontre mais ${produto.categoriaLabel.toLowerCase()}!</h2>

      <div class="rec-grid">
        ${recHTML || '<p class="empty-rec">Nenhuma recomendação disponível.</p>'}
      </div>
    </section>
  `;

  ativarInteracoes(produto);
}

function ativarInteracoes(produto) {
  const wishlistBtn = document.getElementById("wishlist-btn");
  const cepInput = document.getElementById("cep");
  const btnShipping = document.getElementById("btn-shipping");
  const shippingResult = document.getElementById("shipping-result");
  const btnCart = document.getElementById("btn-add-to-cart");

  if (localStorage.getItem("favorito_" + produto.id) === "sim") {
    wishlistBtn.classList.add("active");
    wishlistBtn.setAttribute("aria-label", "Remover dos favoritos");
    wishlistBtn.setAttribute("title", "Remover dos favoritos");
  }

  wishlistBtn.addEventListener("click", () => {
    wishlistBtn.classList.toggle("active");

    if (wishlistBtn.classList.contains("active")) {
      wishlistBtn.setAttribute("aria-label", "Remover dos favoritos");
      wishlistBtn.setAttribute("title", "Remover dos favoritos");
      localStorage.setItem("favorito_" + produto.id, "sim");
    } else {
      wishlistBtn.setAttribute("aria-label", "Adicionar aos favoritos");
      wishlistBtn.setAttribute("title", "Adicionar aos favoritos");
      localStorage.removeItem("favorito_" + produto.id);
    }
  });

  cepInput.addEventListener("input", () => {
    cepInput.value = cepInput.value
      .replace(/\D/g, "")
      .replace(/^(\d{5})(\d)/, "$1-$2")
      .slice(0, 9);
  });

  btnShipping.addEventListener("click", () => {
    const cep = cepInput.value.replace(/\D/g, "");

    if (cep.length !== 8) {
      shippingResult.textContent = "Informe um CEP válido com 8 números.";
      return;
    }

    shippingResult.textContent = `Frete estimado para o CEP ${cep}: R$ 12,90`;
  });

  btnCart.addEventListener("click", () => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push(produto.id);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    btnCart.innerHTML = '<span class="cart-icon">✓</span> Adicionado!';
    btnCart.classList.add("added");

    setTimeout(() => {
      btnCart.innerHTML = '<span class="cart-icon">+</span> Adicionar ao Carrinho';
      btnCart.classList.remove("added");
    }, 2000);
  });
}

function iniciarPaginaProduto() {
  if (!content) return;
  if (CATALOGO.length === 0) {
    mostrarErroCatalogo();
    return;
  }
  if (idUrl) {
    const produtoAtual = getProdutoByIdPagina(idUrl);
    if (produtoAtual) {
      mostrarProduto(produtoAtual);
      return;
    }
    mostrarCatalogo("O produto que você está procurando não existe ou o ID está incorreto.");
    return;
  }
  mostrarCatalogo();
}

iniciarPaginaProduto();
