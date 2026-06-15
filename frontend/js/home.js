import { produtos }
from "../data/produtos.js";

import { createProductCard }
from "../components/product-card/product-card.js";

const brinquedosGrid =
document.getElementById(
"brinquedos-grid"
);

produtos
.filter(p =>
p.categoria === "brinquedos"
)
.forEach(produto => {

brinquedosGrid.innerHTML +=
createProductCard(produto);

});