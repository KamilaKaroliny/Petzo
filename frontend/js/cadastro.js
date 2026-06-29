const form = document.getElementById("cadastroForm");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const nome =
        document.getElementById("nome").value;

    const email =
        document.getElementById("email").value;

    const senha =
        document.getElementById("senha").value;

    const confirmarSenha =
        document.getElementById("confirmarSenha").value;

    if(senha !== confirmarSenha){

        alert("As senhas não coincidem.");
        return;
    }

    const usuario = {
        nome,
        email,
        senha
    };

    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );

    alert("Conta criada com sucesso!");

    window.location.href = "login.html";

});