const notificacoes = [

    {
        titulo: "Diversão Garantida!",
        texto: "Seu pet merece o melhor. Confira os brinquedos mais amados do momento.",
        imagem: "../assets/images/notificacao1.png",
        hora: "Há 4 horas"
    },

    {
        titulo: "Oferta Imperdível!",
        texto: "Descontos especiais por tempo limitado. Aproveite antes que acabe!",
        imagem: "../assets/images/notificacao2.png",
        hora: "Há 2 horas"
    },

    {
        titulo: "Pedido a Caminho!",
        texto: "Seu pedido já foi enviado. Acompanhe cada etapa da entrega.",
        imagem: "../assets/images/notificacao3.png",
        hora: "Há 5 min."
    },

    {
        titulo: "Hora do Cuidado!",
        texto: "A ração do seu pet está acabando. Não deixe faltar!",
        imagem: "../assets/images/notificacao4.png",
        hora: "Há 17 min."
    }

];

const lista = document.getElementById("lista-notificacoes");
const total = document.getElementById("total");
const botao = document.getElementById("btnExcluir");

// Carrega do localStorage
let dados = JSON.parse(localStorage.getItem("notificacoes"));

if (!dados) {
    dados = [...notificacoes];
    salvarNotificacoes();
}

mostrar();

function salvarNotificacoes() {

    localStorage.setItem(
        "notificacoes",
        JSON.stringify(dados)
    );

}

function mostrar() {

    total.textContent = dados.length;

    lista.innerHTML = "";

    if (dados.length === 0) {

        lista.innerHTML = `
            <p class="vazio">
                Você não possui notificações.
            </p>
        `;

        botao.style.display = "none";
        return;
    }

    botao.style.display = "block";

    dados.forEach((item, index) => {

        lista.innerHTML += `

            <div class="card">

                <input
                    type="checkbox"
                    class="check"
                    data-index="${index}">

                <img
                    src="${item.imagem}"
                    class="imagem"
                    alt="${item.titulo}">

                <div class="info">

                    <h3>${item.titulo}</h3>

                    <p>${item.texto}</p>

                </div>

                <span class="hora">

                    ${item.hora}

                </span>

            </div>

        `;

    });

}

botao.addEventListener("click", () => {

    const checks = document.querySelectorAll(".check");

    const manter = [];

    checks.forEach((check, index) => {

        if (!check.checked) {

            manter.push(dados[index]);

        }

    });

    dados = manter;

    salvarNotificacoes();

    mostrar();

});