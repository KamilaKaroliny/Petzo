async function carregarHeader(){

    const html = await fetch("../src/components/header/header.html");

    document.getElementById("header-container").innerHTML =
        await html.text();

}

carregarHeader();