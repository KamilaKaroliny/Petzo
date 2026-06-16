fetch("../src/components/header/header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header-container").innerHTML = data;

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../src/components/header/header.css";

        document.head.appendChild(link);
    });