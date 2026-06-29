const form = document.getElementById("loginForm");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const usuario = JSON.parse(
        localStorage.getItem("usuario")
    );

    if(
        usuario &&
        usuario.email === email &&
        usuario.senha === senha
    ){
        window.location.href = "home.html";
    }
    else{
        alert("E-mail ou senha inválidos.");
    }

});