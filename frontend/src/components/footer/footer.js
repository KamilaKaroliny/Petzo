async function carregarFooter(){

    const html = await fetch("../src/components/footer-nav/footer-nav.html");

    document.getElementById("footer-container").innerHTML =
        await html.text();

}

carregarFooter();