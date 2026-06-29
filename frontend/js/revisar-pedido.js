let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

document.addEventListener("DOMContentLoaded", () => {
    const btnFinalizar = document.getElementById("btn-finalizar");

    if (!btnFinalizar) {
        console.error("Botão btn-finalizar não encontrado");
        return;
    }

    btnFinalizar.addEventListener("click", (event) => {
        event.preventDefault();

        if (carrinho.length === 0) {
            mostrarToast("Seu carrinho está vazio!");
            return;
        }

        mostrarToast("Pedido finalizado com sucesso! 🎉");

        localStorage.removeItem("carrinho");
        carrinho = [];

        // evita crash caso essas funções não existam ainda
        if (typeof renderizarCarrinho === "function") {
            renderizarCarrinho();
        }

        if (typeof atualizarTotal === "function") {
            atualizarTotal();
        }

        setTimeout(() => {
            window.location.href = "../pages/home.html"; 
            // ⚠️ ajuste o caminho se necessário
        }, 1500);
    });
});