// ==============================
// REVISAR PEDIDO
// ==============================

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

document.addEventListener("DOMContentLoaded", () => {

    const btnFinalizar = document.getElementById("btn-finalizar");

    if (!btnFinalizar) {

        console.error("Botão btn-finalizar não encontrado.");

        return;

    }

    btnFinalizar.addEventListener("click", function(event){

        event.preventDefault();

        // Atualiza o carrinho antes de finalizar
        carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        if(carrinho.length === 0){

            mostrarToast("Seu carrinho está vazio!");

            return;

        }

        mostrarToast("Pedido finalizado com sucesso! 🎉");

        // Limpa o carrinho
        localStorage.removeItem("carrinho");

        carrinho = [];

        // Atualiza outras telas caso existam
        if(typeof renderizarCarrinho === "function"){

            renderizarCarrinho();

        }

        if(typeof atualizarSubtotal === "function"){

            atualizarSubtotal();

        }

        // Redireciona
        setTimeout(function(){

            window.location.href = "../pages/home.html";

        },1500);

    });

});