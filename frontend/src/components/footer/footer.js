fetch("../src/components/footer-nav/footer-nav.html")
.then(response => response.text())
.then(data => {

    document
    .getElementById("footer")
    .innerHTML = data;

});