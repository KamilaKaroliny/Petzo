// ===============================
// CARREGAR VALORES DO PEDIDO
// ===============================

function carregarValores() {

    let subtotal = parseFloat(localStorage.getItem("subtotal")) || 0;
    let frete = 0;
    let total = subtotal + frete;

    document.getElementById("subtotal").innerText = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById("total").innerText = `R$ ${total.toFixed(2)}`;
}

carregarValores();


// ===============================
// FINALIZAR PEDIDO
// ===============================

document.getElementById("btn-finalizar").addEventListener("click", () => {

    let subtotal = parseFloat(localStorage.getItem("subtotal")) || 0;
    let frete = 0;
    let total = subtotal + frete;

    // mensagem visual (toast simples)
    const toast = document.createElement("div");

    toast.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #2d7f80;
            color: white;
            padding: 15px 25px;
            border-radius: 12px;
            font-weight: bold;
            z-index: 99999;
            box-shadow: 0 8px 20px rgba(0,0,0,.2);
        ">
            Pedido realizado com sucesso! 🎉 Total: R$ ${total.toFixed(2)}
        </div>
    `;

    document.body.appendChild(toast);

    // limpar carrinho (opcional)
    localStorage.removeItem("carrinho");
    localStorage.removeItem("subtotal");

    // redirecionar após tempo
    setTimeout(() => {
        window.location.href = "home.html";
    }, 1500);
});