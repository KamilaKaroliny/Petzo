/**
 * produtos-data.js
 * Catálogo central de produtos da Pico Pet Shop.
 * Usado pela página produto.html para carregar dados dinamicamente via ?id=...
 *
 * Estrutura de cada produto:
 *   id          – identificador único (usado na URL: produto.html?id=coleira-ajustavel)
 *   nome        – nome do produto
 *   preco       – preço formatado (ex: "R$ 29,90")
 *   descricao   – descrição curta do produto
 *   imagem      – caminho relativo da imagem principal (a partir da raiz do projeto)
 *   categoria   – chave da categoria (usada para montar as recomendações)
 *   categoriaLabel – rótulo legível da categoria
 */

var PRODUTOS = [

    // ── ACESSÓRIOS ──────────────────────────────────────────────────────────────
    {
        id: "coleira-ajustavel",
        nome: "Coleira Ajustável para Pets",
        preco: "R$ 29,90",
        descricao: "Coleira leve e resistente com fivela de segurança e ajuste fácil. Ideal para cães e gatos de todos os portes. Material durável e confortável para uso diário.",
        imagem: "../assets/images/acessorios/Coleira Ajustável para Pets.png",
        categoria: "acessorios",
        categoriaLabel: "Acessórios"
    },
    {
        id: "colete-peitoral-xadrez",
        nome: "Colete Peitoral com Guia (Xadrez)",
        preco: "R$ 54,90",
        descricao: "Peitoral estilo colete com estampa xadrez fashion. Distribui a pressão pelo tórax, evitando lesões no pescoço. Acompanha guia retrátil.",
        imagem: "../assets/images/acessorios/Colete Peitoral com Guia (Xadrez).png",
        categoria: "acessorios",
        categoriaLabel: "Acessórios"
    },
    {
        id: "bolinhas-sensoriais",
        nome: "Bolinhas Sensoriais para Pets",
        preco: "R$ 19,90",
        descricao: "Kit de bolinhas com texturas variadas para estimular os sentidos do seu pet. Seguras, sem BPA e laváveis. Perfeitas para cães filhotes e adultos.",
        imagem: "../assets/images/acessorios/Bolinhas Sensoriais para Pets.png",
        categoria: "acessorios",
        categoriaLabel: "Acessórios"
    },
    {
        id: "comedouro-duplo",
        nome: "Comedouro Duplo para Pets",
        preco: "R$ 39,90",
        descricao: "Comedouro duplo em aço inox com suporte elevado. Facilita a digestão e mantém a postura correta durante a alimentação. Fácil de lavar.",
        imagem: "../assets/images/acessorios/Comedouro Duplo para Pets.png",
        categoria: "acessorios",
        categoriaLabel: "Acessórios"
    },
    {
        id: "cortador-de-unhas",
        nome: "Cortador de Unhas",
        preco: "R$ 24,90",
        descricao: "Cortador profissional com lâmina de aço inox e cabo antiderrapante. Corte preciso e seguro para cães e gatos. Inclui protetor de segurança.",
        imagem: "../assets/images/acessorios/Cortador de unhas.png",
        categoria: "acessorios",
        categoriaLabel: "Acessórios"
    },
    {
        id: "escova-massageadora",
        nome: "Escova Massageadora para Pets",
        preco: "R$ 34,90",
        descricao: "Escova de silicone macio que remove pelos soltos e massageia a pele do animal. Estimula a circulação sanguínea e proporciona relaxamento.",
        imagem: "../assets/images/acessorios/Escova Massageadora para Pets.png",
        categoria: "acessorios",
        categoriaLabel: "Acessórios"
    },
    {
        id: "escova-removedora-pelos",
        nome: "Escova Removedora de Pelos",
        preco: "R$ 44,90",
        descricao: "Escova com tecnologia de remoção de pelos profunda. Ideal para raças de pelo longo e dupla camada. Reduce a queda de pelos em até 90%.",
        imagem: "../assets/images/acessorios/Escova Removedora de Pelos.png",
        categoria: "acessorios",
        categoriaLabel: "Acessórios"
    },
    {
        id: "guia-retratil",
        nome: "Guia Retrátil para Pets",
        preco: "R$ 59,90",
        descricao: "Guia retrátil de 5 metros com trava automática e cabo resistente. Botão ergonômico e cabo antivibração. Suporta pets de até 25 kg.",
        imagem: "../assets/images/acessorios/Guia Retrátil para Pets.png",
        categoria: "acessorios",
        categoriaLabel: "Acessórios"
    },
    {
        id: "kit-higiene-pet",
        nome: "Kit Completo de Higiene Pet",
        preco: "R$ 89,90",
        descricao: "Kit completo com escova, pente, cortador de unhas, tesoura e removedor de pelos. Tudo o que você precisa para manter seu pet sempre arrumado.",
        imagem: "../assets/images/acessorios/Kit Completo de Higiene Pet.png",
        categoria: "acessorios",
        categoriaLabel: "Acessórios"
    },
    {
        id: "peitoral-com-guia",
        nome: "Peitoral com Guia para Pets",
        preco: "R$ 49,90",
        descricao: "Peitoral ajustável em nylon resistente com guia de 1,5 m inclusa. Design ergonômico que não restringe os movimentos do animal.",
        imagem: "../assets/images/acessorios/Peitoral com Guia para Pets.png",
        categoria: "acessorios",
        categoriaLabel: "Acessórios"
    },
    {
        id: "suporte-coletor-fezes",
        nome: "Suporte + Saquinho Coletor de Fezes",
        preco: "R$ 14,90",
        descricao: "Suporte porta-saquinhos que prende à guia. Acompanha 15 saquinhos biodegradáveis. Prático para passeios, mantendo o ambiente limpo.",
        imagem: "../assets/images/acessorios/Suporte + Saquinho Coletor de Fezes.png",
        categoria: "acessorios",
        categoriaLabel: "Acessórios"
    },
    {
        id: "tapete-lick-mat",
        nome: "Tapete Lick Mat (Alimentação Lenta)",
        preco: "R$ 32,90",
        descricao: "Tapete de silicone com ranhuras que estimula a alimentação lenta. Reduz a ansiedade e melhora a digestão. Pode ser usado com ração, pastinhas e frutas.",
        imagem: "../assets/images/acessorios/Tapete Lick Mat (Alimentação Lenta).png",
        categoria: "acessorios",
        categoriaLabel: "Acessórios"
    },

    // ── AQUÁTICOS ───────────────────────────────────────────────────────────────
    {
        id: "alimentador-automatico-peixes",
        nome: "Alimentador Automático para Peixes",
        preco: "R$ 79,90",
        descricao: "Alimentador programável com timer digital. Até 4 refeições por dia. Compartimento rotativo evita entupimentos. Ideal para viagens e rotinas.",
        imagem: "../assets/images/aquaticos/Alimentador Automático para Peixes.png",
        categoria: "aquaticos",
        categoriaLabel: "Aquáticos"
    },
    {
        id: "aquecedor-termostato",
        nome: "Aquecedor com Termostato",
        preco: "R$ 69,90",
        descricao: "Aquecedor submersível com termostato ajustável de 20°C a 34°C. Proteção contra superaquecimento e indicador LED de funcionamento.",
        imagem: "../assets/images/aquaticos/Aquecedor com Termostato.png",
        categoria: "aquaticos",
        categoriaLabel: "Aquáticos"
    },
    {
        id: "aquario-decorativo-completo-2",
        nome: "Aquário Decorativo Completo (Premium)",
        preco: "R$ 349,90",
        descricao: "Aquário completo com filtro, iluminação LED colorida, aquecedor e decoração inclusos. Tampa com abertura para alimentação fácil.",
        imagem: "../assets/images/aquaticos/Aquário Decorativo Completo (2).png",
        categoria: "aquaticos",
        categoriaLabel: "Aquáticos"
    },
    {
        id: "filtro-externo-bomba",
        nome: "Filtro Externo com Bomba",
        preco: "R$ 189,90",
        descricao: "Filtro externo de alto desempenho com bomba integrada. Filtragem mecânica, biológica e química. Silencioso e fácil de limpar.",
        imagem: "../assets/images/aquaticos/Filtro Externo com Bomba.png",
        categoria: "aquaticos",
        categoriaLabel: "Aquáticos"
    },
    {
        id: "aquario-decorativo-completo",
        nome: "Aquário Decorativo Completo",
        preco: "R$ 249,90",
        descricao: "Aquário em vidro temperado com tampa, bomba e iluminação LED. Design moderno que valoriza qualquer ambiente. Capacidade para até 30 litros.",
        imagem: "../assets/images/aquaticos/Aquário Decorativo Completo.png",
        categoria: "aquaticos",
        categoriaLabel: "Aquáticos"
    },
    {
        id: "filtro-externo-completo",
        nome: "Filtro Externo Completo",
        preco: "R$ 159,90",
        descricao: "Filtro externo canister com capacidade de 600 L/h. Inclui mídias filtrantes, mangueiras e conexões. Para aquários de até 150 litros.",
        imagem: "../assets/images/aquaticos/Filtro Externo Completo.png",
        categoria: "aquaticos",
        categoriaLabel: "Aquáticos"
    },
    {
        id: "mini-aquario-decorativo",
        nome: "Mini Aquário Decorativo",
        preco: "R$ 99,90",
        descricao: "Mini aquário em acrílico com filtragem interna e LED. Perfeito para mesas e escritórios. Capacidade de 5 litros. Fácil montagem e manutenção.",
        imagem: "../assets/images/aquaticos/Mini Aquário Decorativo.png",
        categoria: "aquaticos",
        categoriaLabel: "Aquáticos"
    },
    {
        id: "filtro-interno-multifuncional",
        nome: "Filtro Interno Multifuncional",
        preco: "R$ 59,90",
        descricao: "Filtro interno 3 em 1: filtragem, aeração e circulação. Potência ajustável. Silencioso e compacto, ideal para aquários de até 60 litros.",
        imagem: "../assets/images/aquaticos/Filtro Interno Multifuncional.png",
        categoria: "aquaticos",
        categoriaLabel: "Aquáticos"
    },
    {
        id: "aquario-decorativo-pequeno",
        nome: "Aquário Decorativo Pequeno",
        preco: "R$ 129,90",
        descricao: "Aquário compacto em vidro com acabamento premium. Inclui bomba d'água e suporte para iluminação. Capacidade de 10 litros.",
        imagem: "../assets/images/aquaticos/Aquário Decorativo Pequeno.png",
        categoria: "aquaticos",
        categoriaLabel: "Aquáticos"
    },
    {
        id: "filtro-hang-on-premium",
        nome: "Filtro Hang On Premium",
        preco: "R$ 89,90",
        descricao: "Filtro hang-on de fácil instalação com mídia dupla. Fluxo de até 400 L/h. Prático para reposição e limpeza sem parar o sistema.",
        imagem: "../assets/images/aquaticos/Filtro Hang On Premium.png",
        categoria: "aquaticos",
        categoriaLabel: "Aquáticos"
    },
    {
        id: "aquario-vertical-led",
        nome: "Aquário Vertical LED",
        preco: "R$ 199,90",
        descricao: "Aquário vertical com design diferenciado e faixa de LED RGB. Perfeito como peça decorativa e lar para betas e pequenos peixes tropicais.",
        imagem: "../assets/images/aquaticos/Aquário Vertical LED.png",
        categoria: "aquaticos",
        categoriaLabel: "Aquáticos"
    },
    {
        id: "filtro-hang-on-compacto",
        nome: "Filtro Hang On Compacto",
        preco: "R$ 49,90",
        descricao: "Filtro hang-on compacto e silencioso para aquários de até 40 litros. Instalação rápida sem necessidade de ferramentas.",
        imagem: "../assets/images/aquaticos/Filtro Hang On Compacto.png",
        categoria: "aquaticos",
        categoriaLabel: "Aquáticos"
    },

    // ── AVES ────────────────────────────────────────────────────────────────────
    {
        id: "arco-espelho-poleiros",
        nome: "Arco com Espelho e Poleiros",
        preco: "R$ 27,90",
        descricao: "Brinquedo em arco com espelho e poleiros coloridos para estimular a interação das aves. Fixação segura nas grades da gaiola.",
        imagem: "../assets/images/aves/Arco com Espelho e Poleiros.png",
        categoria: "aves",
        categoriaLabel: "Aves"
    },
    {
        id: "balanco-colorido-suspenso",
        nome: "Balanço Colorido Suspenso para Aves",
        preco: "R$ 19,90",
        descricao: "Balanço suspenso com correntes coloridas e poleiro de madeira natural. Estimula o equilíbrio e a brincadeira das aves. Fácil instalação.",
        imagem: "../assets/images/aves/Balanço Colorido Suspenso para Aves.png",
        categoria: "aves",
        categoriaLabel: "Aves"
    },
    {
        id: "playground-torre-suspensa",
        nome: "Playground Torre Suspensa para Aves",
        preco: "R$ 64,90",
        descricao: "Torre suspensa com múltiplos poleiros, brinquedos e escadas. Estimula a atividade física e o bem-estar das aves. Madeira não tóxica.",
        imagem: "../assets/images/aves/Playground Torre Suspensa para Aves.png",
        categoria: "aves",
        categoriaLabel: "Aves"
    },
    {
        id: "brinquedo-giratorio-poleiros",
        nome: "Brinquedo Giratório com Poleiros",
        preco: "R$ 34,90",
        descricao: "Brinquedo giratório colorido com múltiplos poleiros e argolas. Proporciona horas de entretenimento e exercício para periquitos e calopsitas.",
        imagem: "../assets/images/aves/Brinquedo Giratório com Poleiros.png",
        categoria: "aves",
        categoriaLabel: "Aves"
    },
    {
        id: "arco-poleiro-base",
        nome: "Arco de Poleiro Decorado com Base",
        preco: "R$ 39,90",
        descricao: "Arco estável com base sólida e poleiros em diferentes alturas. Perfeito para aves que gostam de pousar e brincar fora da gaiola.",
        imagem: "../assets/images/aves/Arco de Poleiro Decorado com Base.png",
        categoria: "aves",
        categoriaLabel: "Aves"
    },
    {
        id: "balanco-madeira-natural",
        nome: "Balanço de Madeira Natural com Poleiro",
        preco: "R$ 22,90",
        descricao: "Balanço artesanal em madeira natural tratada. Proporciona conforto e diversão. Compatível com calopsitas, periquitos e pequenos papagaios.",
        imagem: "../assets/images/aves/Balanço de Madeira Natural com Poleiro.png",
        categoria: "aves",
        categoriaLabel: "Aves"
    },
    {
        id: "ponte-flexivel-colorida",
        nome: "Ponte Flexível Colorida para Aves",
        preco: "R$ 17,90",
        descricao: "Ponte flexível e articulada que se adapta ao formato da gaiola. Colorida e resistente, estimula o deslocamento e a brincadeira das aves.",
        imagem: "../assets/images/aves/Ponte Flexível Colorida para Aves.png",
        categoria: "aves",
        categoriaLabel: "Aves"
    },
    {
        id: "casinha-decorativa-aves",
        nome: "Casinha Decorativa para Aves",
        preco: "R$ 44,90",
        descricao: "Casinha em madeira natural para aves se abrigar e brincar. Serve como ninho ou esconderijo. Fácil fixação nas grades da gaiola.",
        imagem: "../assets/images/aves/Casinha Decorativa para Aves.png",
        categoria: "aves",
        categoriaLabel: "Aves"
    },
    {
        id: "arco-neon-argolas",
        nome: "Arco Neon com Argolas Interativas",
        preco: "R$ 29,90",
        descricao: "Arco colorido estilo neon com argolas interativas que estimulam o bico e as patas das aves. Cores vivas e material resistente e atóxico.",
        imagem: "../assets/images/aves/Arco Neon com Argolas Interativas.png",
        categoria: "aves",
        categoriaLabel: "Aves"
    },
    {
        id: "escada-vertical-madeira",
        nome: "Escada Vertical de Madeira para Aves",
        preco: "R$ 21,90",
        descricao: "Escada vertical em madeira para estimular a escalada e o exercício. Degraus espaçados e resistentes. Ótima para gaiolas e viveiros.",
        imagem: "../assets/images/aves/Escada Vertical de Madeira para Aves.png",
        categoria: "aves",
        categoriaLabel: "Aves"
    },
    {
        id: "arco-simples-argolas",
        nome: "Arco Simples com Argolas Coloridas",
        preco: "R$ 14,90",
        descricao: "Arco leve com argolas coloridas para morder e brincar. Estimula a atividade mental e física de periquitos e calopsitas.",
        imagem: "../assets/images/aves/Arco Simples com Argolas Coloridas.png",
        categoria: "aves",
        categoriaLabel: "Aves"
    },
    {
        id: "playground-arco-premium",
        nome: "Playground Arco Premium para Pássaros",
        preco: "R$ 74,90",
        descricao: "Playground completo com arco, escadas, poleiros e acessórios coloridos. Estrutura robusta para uso externo à gaiola. Ideal para aves sociáveis.",
        imagem: "../assets/images/aves/Playground Arco Premium para Pássaros.png",
        categoria: "aves",
        categoriaLabel: "Aves"
    },

    // ── BRINQUEDOS ──────────────────────────────────────────────────────────────
    {
        id: "bolinha-porta-petiscos",
        nome: "Bolinha Porta Petiscos",
        preco: "R$ 14,90",
        descricao: "Diversão e estímulo para o seu pet todos os dias. Feita com material resistente e seguro, libera petiscos enquanto o animal brinca, incentivando o raciocínio. Fácil de usar e perfeita para momentos de entretenimento.",
        imagem: "../assets/images/brinquedos/Bolinha porta petiscos.png",
        categoria: "brinquedos",
        categoriaLabel: "Brinquedos"
    },
    {
        id: "bolinha-unicornio",
        nome: "Bolinha Unicórnio com Textura",
        preco: "R$ 18,90",
        descricao: "Bolinha temática com textura macia que estimula a mordida saudável. Design divertido de unicórnio em cores vibrantes. Ideal para cães de pequeno e médio porte.",
        imagem: "../assets/images/brinquedos/Bolinha unicórnio com textura.png",
        categoria: "brinquedos",
        categoriaLabel: "Brinquedos"
    },
    {
        id: "brinquedo-multifuncional-gatos",
        nome: "Brinquedo Multifuncional para Gatos",
        preco: "R$ 39,90",
        descricao: "Brinquedo interativo com arranhador, bolinhas e penas. Estimula os instintos naturais de caça dos gatos. Base antiderrapante e materiais seguros.",
        imagem: "../assets/images/brinquedos/Brinquedo multifuncional para gatos.png",
        categoria: "brinquedos",
        categoriaLabel: "Brinquedos"
    },
    {
        id: "frisbees-coloridos",
        nome: "Frisbees Coloridos",
        preco: "R$ 22,90",
        descricao: "Kit de frisbees coloridos em borracha flexível. Seguros para a boca dos pets e com ótimo voo. Ideal para brincadeiras ao ar livre com cães.",
        imagem: "../assets/images/brinquedos/Frisbes coloridos.png",
        categoria: "brinquedos",
        categoriaLabel: "Brinquedos"
    },
    {
        id: "kit-bolinhas-tenis",
        nome: "Kit 4 Bolinhas de Tênis para Cachorros",
        preco: "R$ 24,90",
        descricao: "Kit com 4 bolinhas de tênis no tamanho certo para cães. Material resistente à mordida e de fácil higienização. Ótimas para buscar e brincar.",
        imagem: "../assets/images/brinquedos/Kit 4 bolinhas de tênis para cachorros.png",
        categoria: "brinquedos",
        categoriaLabel: "Brinquedos"
    },
    {
        id: "mordedor-tranca",
        nome: "Mordedor Trança para Cachorros",
        preco: "R$ 29,90",
        descricao: "Mordedor em corda trançada resistente. Excelente para limpeza dos dentes e entretenimento. Disponível em vários tamanhos para diferentes portes.",
        imagem: "../assets/images/brinquedos/Mordedor trança para cachoros.png",
        categoria: "brinquedos",
        categoriaLabel: "Brinquedos"
    },
    {
        id: "pelucia-mordedora",
        nome: "Pelúcia com Trança Mordedora",
        preco: "R$ 34,90",
        descricao: "Pelúcia com parte em corda trançada para mordida. Combinação perfeita de maciez e resistência. Estimula o instinto natural de pegar e sacudir.",
        imagem: "../assets/images/brinquedos/Pelucia com trança mordedora.png",
        categoria: "brinquedos",
        categoriaLabel: "Brinquedos"
    },
    {
        id: "ratinho-controle-remoto",
        nome: "Ratinho de Controle Remoto",
        preco: "R$ 59,90",
        descricao: "Ratinho interativo controlado por controle remoto. Movimentos imprevisíveis que ativam o instinto de caça dos gatos. Recarregável via USB.",
        imagem: "../assets/images/brinquedos/Ratinho de controle remoto.png",
        categoria: "brinquedos",
        categoriaLabel: "Brinquedos"
    },
    {
        id: "mordedor-hello-kitty",
        nome: "Super Mordedor da Hello Kitty",
        preco: "R$ 44,90",
        descricao: "Mordedor temático Hello Kitty em borracha resistente e atóxica. Ajuda na saúde dental e proporciona diversão. Perfeito para presentear.",
        imagem: "../assets/images/brinquedos/Super mordedor da Hello Kitty.png",
        categoria: "brinquedos",
        categoriaLabel: "Brinquedos"
    },
    {
        id: "tranca-mordedora-pink",
        nome: "Trança Mordedora com Bolinha Pink",
        preco: "R$ 26,90",
        descricao: "Mordedor em corda trançada com bolinha na ponta. Cor pink vibrante. Auxilia na limpeza dos dentes e serve como brinquedo de buscar.",
        imagem: "../assets/images/brinquedos/Trança mordedora com bolinha Pink.png",
        categoria: "brinquedos",
        categoriaLabel: "Brinquedos"
    },
    {
        id: "trio-mordedores-neon",
        nome: "Trio Mordedores Neon",
        preco: "R$ 49,90",
        descricao: "Kit com 3 mordedores em cores neon. Formatos variados para diferentes tipos de mordida. Material atóxico e durável, ideal para cães agitados.",
        imagem: "../assets/images/brinquedos/Trio mordedores Neon.png",
        categoria: "brinquedos",
        categoriaLabel: "Brinquedos"
    },
    {
        id: "trio-mordedores-filhotes",
        nome: "Trio Mordedores para Filhotes",
        preco: "R$ 39,90",
        descricao: "Kit especial para filhotes com 3 mordedores de silicone macio. Alivia o desconforto da dentição e entretém os pequenos. Seguros e laváveis.",
        imagem: "../assets/images/brinquedos/Trio mordedores para filhotes.png",
        categoria: "brinquedos",
        categoriaLabel: "Brinquedos"
    },

    // ── CAMAS ───────────────────────────────────────────────────────────────────
    {
        id: "cama-pet-canto",
        nome: "Cama PET de Canto",
        preco: "R$ 79,90",
        descricao: "Cama de canto que se encaixa perfeitamente em qualquer ambiente. Estrutura firme com almofada removível e lavável. Ideal para gatos e cães pequenos.",
        imagem: "../assets/images/camas/Cama PET - Canto.png",
        categoria: "camas",
        categoriaLabel: "Camas"
    },
    {
        id: "cama-pet-concha-cinza",
        nome: "Cama PET Concha – Cinza",
        preco: "R$ 99,90",
        descricao: "Cama em formato de concha com bordas altas para sensação de aconchego e segurança. Tecido macio e antialérgico. Removível e lavável.",
        imagem: "../assets/images/camas/Cama PET Concha - Cinza.png",
        categoria: "camas",
        categoriaLabel: "Camas"
    },
    {
        id: "cama-pet-elevada-cinza",
        nome: "Cama PET Elevada – Cinza",
        preco: "R$ 119,90",
        descricao: "Cama elevada com estrutura de metal e tela respirável. Mantém o pet afastado do chão frio e úmido. Ideal para cães de médio e grande porte.",
        imagem: "../assets/images/camas/Cama PET elevada - cinza.png",
        categoria: "camas",
        categoriaLabel: "Camas"
    },
    {
        id: "cama-pet-listras-amarela",
        nome: "Cama PET Listras – Amarela",
        preco: "R$ 89,90",
        descricao: "Cama com estampa de listras coloridas e enchimento antialérgico. Design alegre que combina com qualquer ambiente. Capa removível e lavável.",
        imagem: "../assets/images/camas/Cama PET Listras - Amarela.png",
        categoria: "camas",
        categoriaLabel: "Camas"
    },
    {
        id: "cama-pet-luxo-azul",
        nome: "Cama PET Luxo – Azul",
        preco: "R$ 149,90",
        descricao: "Cama premium com bordas acolchoadas e tecido veludo macio. Enchimento em espuma de alta densidade para máximo conforto.",
        imagem: "../assets/images/camas/Cama PET Luxo - Azul.png",
        categoria: "camas",
        categoriaLabel: "Camas"
    },
    {
        id: "cama-pet-luxo-cinza",
        nome: "Cama PET Luxo – Cinza",
        preco: "R$ 149,90",
        descricao: "Cama luxo em cinza elegante com bordas acolchoadas. Tecido antialérgico e base antiderrapante. Fundo impermeável para maior durabilidade.",
        imagem: "../assets/images/camas/Cama PET Luxo - Cinza.png",
        categoria: "camas",
        categoriaLabel: "Camas"
    },
    {
        id: "cama-pet-luxo-marrom",
        nome: "Cama PET Luxo – Marrom",
        preco: "R$ 149,90",
        descricao: "Versão marrom da linha luxo com tecido veludo premium. Lavável em máquina e com enchimento resistente a lavagens frequentes.",
        imagem: "../assets/images/camas/Cama PET Luxo - Marrom.png",
        categoria: "camas",
        categoriaLabel: "Camas"
    },
    {
        id: "cama-pet-renda-preto",
        nome: "Cama PET Renda – Preto",
        preco: "R$ 129,90",
        descricao: "Cama com detalhes em renda e acabamento elegante. Bordas firmes para apoio da cabeça. Tecido lavável e enchimento antialérgico.",
        imagem: "../assets/images/camas/Cama PET Renda - Preto.png",
        categoria: "camas",
        categoriaLabel: "Camas"
    },
    {
        id: "cama-pet-redonda-verde",
        nome: "Cama PET Redonda – Verde",
        preco: "R$ 94,90",
        descricao: "Cama redonda com bordas altas e pelúcia macia. Formato que simula o ninho natural dos animais. Ótima para gatos e cães de pequeno porte.",
        imagem: "../assets/images/camas/Cama PET Redonda - Verde.png",
        categoria: "camas",
        categoriaLabel: "Camas"
    },
    {
        id: "cama-pet-redonda-preto",
        nome: "Cama PET Redonda – Preto",
        preco: "R$ 94,90",
        descricao: "Cama redonda clássica na cor preta. Pelúcia de alta qualidade e base firme. Lavável e com enchimento que não empedra.",
        imagem: "../assets/images/camas/Cama PET Redonda - Preto.png",
        categoria: "camas",
        categoriaLabel: "Camas"
    },
    {
        id: "cama-pet-redonda-cinza",
        nome: "Cama PET Redonda – Cinza",
        preco: "R$ 94,90",
        descricao: "Cama redonda neutra em cinza, combina com qualquer decoração. Bordas acolchoadas, pelúcia macia e base antiderrapante.",
        imagem: "../assets/images/camas/Cama PET Redonda - Cinza.png",
        categoria: "camas",
        categoriaLabel: "Camas"
    },
    {
        id: "cama-pet-quadriculada-beje",
        nome: "Cama PET Quadriculada – Bege",
        preco: "R$ 84,90",
        descricao: "Cama com estampa quadriculada em tons de bege. Tecido resistente e enchimento antialérgico. Capa removível para higienização fácil.",
        imagem: "../assets/images/camas/Cama PET quadriculada - Beje.png",
        categoria: "camas",
        categoriaLabel: "Camas"
    },

    // ── RAÇÃO ───────────────────────────────────────────────────────────────────
    {
        id: "racao-funny-bunny",
        nome: "Comida Funny Bunny",
        preco: "R$ 32,90",
        descricao: "Ração completa para coelhos com cereais, frutas e vegetais desidratados. Rica em fibras para a saúde digestiva. Embalagem de 500 g.",
        imagem: "../assets/images/racao/Comida - Funny Bunny.png",
        categoria: "racao",
        categoriaLabel: "Rações"
    },
    {
        id: "racao-nutropica-aves",
        nome: "Comida de Aves – Nutrópica",
        preco: "R$ 44,90",
        descricao: "Ração premium Nutrópica para psitacídeos. Contém frutas, legumes e sementes selecionadas. Formulada por veterinários para saúde plena das aves.",
        imagem: "../assets/images/racao/Comida de Aves - Nutrópica.png",
        categoria: "racao",
        categoriaLabel: "Rações"
    },
    {
        id: "racao-pedigree",
        nome: "Comida de Cachorro – Pedigree",
        preco: "R$ 89,90",
        descricao: "Ração Pedigree adulto com frango e arroz. Nutrição completa e balanceada para cães de todos os portes. Enriquecida com vitaminas e minerais. Embalagem de 3 kg.",
        imagem: "../assets/images/racao/Comida de Cachorro - Pedigree.png",
        categoria: "racao",
        categoriaLabel: "Rações"
    },
    {
        id: "racao-little-one-coelho",
        nome: "Comida de Coelho – Little One",
        preco: "R$ 38,90",
        descricao: "Ração Little One para coelhos adultos. Mix equilibrado de fibras, vitaminas e minerais essenciais. Embalagem de 900 g.",
        imagem: "../assets/images/racao/Comida de Coelho  - Little ONE.png",
        categoria: "racao",
        categoriaLabel: "Rações"
    },
    {
        id: "racao-gato-premium",
        nome: "Comida de Gato Premium",
        preco: "R$ 69,90",
        descricao: "Ração premium para gatos adultos com alto teor de proteína animal. Suporta a saúde renal, pelagem brilhante e imunidade. Embalagem de 2 kg.",
        imagem: "../assets/images/racao/Comida de Gato - Premium.png",
        categoria: "racao",
        categoriaLabel: "Rações"
    },
    {
        id: "racao-peixe-akbapiyc",
        nome: "Comida de Peixe – Akbapiyc",
        preco: "R$ 24,90",
        descricao: "Ração em flocos para peixes tropicais e de água fria. Fórmula balanceada com vitaminas para cores vivas e saúde dos peixes.",
        imagem: "../assets/images/racao/Comida de Peixe - Akbapiyc.png",
        categoria: "racao",
        categoriaLabel: "Rações"
    },
    {
        id: "racao-hamster-prefere",
        nome: "Comida de Hamster – Prefere",
        preco: "R$ 19,90",
        descricao: "Mix especial para hamsters com sementes, grãos e frutas desidratadas. Formulado para energia, vitalidade e saúde dos roedores.",
        imagem: "../assets/images/racao/Comida de Hamster  - Prefere.png",
        categoria: "racao",
        categoriaLabel: "Rações"
    },
    {
        id: "racao-supertop-aves",
        nome: "Comida de Aves – Supertop",
        preco: "R$ 29,90",
        descricao: "Ração Supertop para canários e outros pássaros. Mix de sementes ricas em energia e nutrientes. Embalagem de 500 g.",
        imagem: "../assets/images/racao/Comida de Aves - Supertop.png",
        categoria: "racao",
        categoriaLabel: "Rações"
    },
    {
        id: "racao-special-dog",
        nome: "Comida de Cachorro – Special Dog",
        preco: "R$ 74,90",
        descricao: "Ração Special Dog com carne e arroz. Alta digestibilidade e palatabilidade. Indicada para cães adultos de médio e grande porte. Embalagem de 3 kg.",
        imagem: "../assets/images/racao/Comida de Cachorro - Special Dog.png",
        categoria: "racao",
        categoriaLabel: "Rações"
    },
    {
        id: "racao-coelho-careplus",
        nome: "Comida de Coelho – Care+",
        preco: "R$ 42,90",
        descricao: "Ração Care+ para coelhos com feno, vegetais e probióticos. Auxilia a digestão e fortalece o sistema imunológico dos roedores.",
        imagem: "../assets/images/racao/Comida de Coelho - Care+.png",
        categoria: "racao",
        categoriaLabel: "Rações"
    },
    {
        id: "racao-gato-whiskas",
        nome: "Comida de Gato – Whiskas",
        preco: "R$ 59,90",
        descricao: "Ração Whiskas para gatos adultos sabor frango. Formulação completa com taurina, omega 3 e vitamina E. Embalagem de 2,7 kg.",
        imagem: "../assets/images/racao/Comida de Gato - Whiskas.png",
        categoria: "racao",
        categoriaLabel: "Rações"
    },
    {
        id: "racao-peixe-poytara",
        nome: "Comida de Peixe – Poytara",
        preco: "R$ 22,90",
        descricao: "Ração Poytara em grânulos para peixes ornamentais. Fórmula balanceada que não turva a água. Cores vivas e crescimento saudável.",
        imagem: "../assets/images/racao/Comida de Peixe - Poytara.png",
        categoria: "racao",
        categoriaLabel: "Rações"
    },

    // ── ROEDORES ────────────────────────────────────────────────────────────────
    {
        id: "banheiro-higienico-roedores",
        nome: "Banheiro Higiênico para Roedores",
        preco: "R$ 34,90",
        descricao: "Banheiro higiênico desenvolvido para facilitar a limpeza da gaiola e ajudar no treinamento do pet, produzido com material resistente e de fácil higienização, ideal para hamsters, porquinhos-da-índia e pequenos roedores.",
        imagem: "../assets/images/roedores/Banheiro Higiênico para Roedores.png",
        categoria: "roedores",
        categoriaLabel: "Roedores"
    },
    {
        id: "bebedouro-automatico-gaiola",
        nome: "Bebedouro Automático para Gaiola",
        preco: "R$ 24,90",
        descricao: "Bebedouro de bico metálico com fixação em grade de gaiola. Garante água sempre fresca e sem desperdício. Capacidade de 250 ml.",
        imagem: "../assets/images/roedores/Bebedouro Automático para Gaiola.png",
        categoria: "roedores",
        categoriaLabel: "Roedores"
    },
    {
        id: "comedouro-automatico-suporte",
        nome: "Comedouro Automático com Suporte",
        preco: "R$ 29,90",
        descricao: "Comedouro de fixação em grade com suporte ajustável. Libera ração conforme o consumo do animal. Fácil de higienizar.",
        imagem: "../assets/images/roedores/Comedouro Automático com Suporte.png",
        categoria: "roedores",
        categoriaLabel: "Roedores"
    },
    {
        id: "disco-exercicio-hamster-rosa",
        nome: "Disco de Exercício para Hamster – Rosa",
        preco: "R$ 39,90",
        descricao: "Roda de corrida em forma de disco silenciosa e sem barras centrais que evitam lesões. Design moderno em rosa. Para hamsters de todos os tamanhos.",
        imagem: "../assets/images/roedores/Disco de Exercício para Hamster Rosa.png",
        categoria: "roedores",
        categoriaLabel: "Roedores"
    },
    {
        id: "gaiola-completa-hamster",
        nome: "Gaiola Completa para Hamster",
        preco: "R$ 149,90",
        descricao: "Gaiola completa com roda de exercício, bebedouro, comedouro e casinha. Estrutura em grade revestida com base plástica. Fácil montagem e limpeza.",
        imagem: "../assets/images/roedores/Gaiola Completa para Hamster.png",
        categoria: "roedores",
        categoriaLabel: "Roedores"
    },
    {
        id: "kit-brinquedos-madeira-roedores",
        nome: "Kit Brinquedos de Madeira para Roedores",
        preco: "R$ 44,90",
        descricao: "Kit com escadas, balanços e brinquedos de madeira natural não tratada. Estimula atividade física e desgaste dos dentes dos roedores.",
        imagem: "../assets/images/roedores/Kit Brinquedos de Madeira para Roedores.png",
        categoria: "roedores",
        categoriaLabel: "Roedores"
    },
    {
        id: "kit-tuneis-coloridos",
        nome: "Kit Túneis Coloridos Interativos",
        preco: "R$ 54,90",
        descricao: "Kit de túneis flexíveis e coloridos para montar labirintos e percursos. Estimula exploração e atividade física. Compatível com hamsters e ratinhos.",
        imagem: "../assets/images/roedores/Kit Túneis Coloridos Interativos.png",
        categoria: "roedores",
        categoriaLabel: "Roedores"
    },
    {
        id: "roda-exercicio-azul",
        nome: "Roda de Exercício Azul para Hamster",
        preco: "R$ 34,90",
        descricao: "Roda de exercício em plástico resistente com eixo silencioso. Superfície interna antiderrapante. Fixação em grade ou base de apoio. Diâmetro: 17 cm.",
        imagem: "../assets/images/roedores/Roda de Exercício Azul para Hamster.png",
        categoria: "roedores",
        categoriaLabel: "Roedores"
    },
    {
        id: "bebedouro-vertical-rosa",
        nome: "Bebedouro Vertical Rosa para Gaiola",
        preco: "R$ 19,90",
        descricao: "Bebedouro vertical de bico inox em rosa. Fixação segura em qualquer grade. Capacidade de 200 ml. Fácil de encher e limpar.",
        imagem: "../assets/images/roedores/Bebedouro Vertical Rosa para Gaiola.png",
        categoria: "roedores",
        categoriaLabel: "Roedores"
    },
    {
        id: "kit-brinquedos-petiscos-roedores",
        nome: "Kit Brinquedos e Petiscos para Roedores",
        preco: "R$ 59,90",
        descricao: "Kit completo com brinquedos de madeira e petiscos naturais. Estimula a atividade e complementa a alimentação dos roedores.",
        imagem: "../assets/images/roedores/Kit Brinquedos e Petiscos para Roedores.png",
        categoria: "roedores",
        categoriaLabel: "Roedores"
    },
    {
        id: "roda-exercicio-metalica",
        nome: "Roda de Exercício Metálica Grande",
        preco: "R$ 64,90",
        descricao: "Roda de exercício em metal inoxidável para roedores maiores. Silenciosa, resistente e segura. Diâmetro de 28 cm, ideal para ratazanas e cobaias.",
        imagem: "../assets/images/roedores/Roda de Exercício Metálica Grande.png",
        categoria: "roedores",
        categoriaLabel: "Roedores"
    },
    {
        id: "kit-playground-roedores",
        nome: "Kit Playground Completo para Roedores",
        preco: "R$ 79,90",
        descricao: "Playground completo com rampas, plataformas, escadas e balanços. Estrutura modular que pode ser ampliada. Madeira natural atóxica.",
        imagem: "../assets/images/roedores/Kit Playground Completo para Roedores.png",
        categoria: "roedores",
        categoriaLabel: "Roedores"
    }

];

// Helper: buscar produto por id
function getProdutoById(id) {
    return PRODUTOS.find(p => p.id === id) || null;
}

// Helper: buscar produtos por categoria (exclui o atual)
function getProdutosByCategoria(categoria, excludeId, limit = 12) {
    return PRODUTOS
        .filter(p => p.categoria === categoria && p.id !== excludeId)
        .slice(0, limit);
}
        const params = new URLSearchParams(window.location.search);
        const idUrl = params.get('id');
        const content = document.getElementById('page-content');

        function corrigirCaminhoImagem(caminho) {
    if (!caminho) return '';

        if (
        caminho.startsWith('../') ||
        caminho.startsWith('/') ||
        caminho.startsWith('http')
        ) {
      return caminho;
    }

        return '../' + caminho;
  }

        function buscarProduto() {
    // Quando abrir produto.html?id=algum-produto, mostra o produto específico.
    if (idUrl) {
      return getProdutoById(idUrl);
    }

        // Quando abrir apenas produto.html, mostra o catálogo/lista de produtos.
        // Assim ele não fica preso no último produto salvo no localStorage.
        return null;
  }

        function montarCardProduto(produto) {
    return `
        <a class="catalog-card" href="produto.html?id=${produto.id}">
            <img src="${corrigirCaminhoImagem(produto.imagem)}" alt="${produto.nome}" loading="lazy">
                <h2>${produto.nome}</h2>
                <strong>${produto.preco}</strong>
        </a>
        `;
  }

        function mostrarCatalogo(mensagem = '') {
            document.title = 'Petzo - Produtos';
        document.getElementById('btn-back').href = 'home.html';

        const aviso = mensagem
        ? `
        <div class="not-found">
            <h2>Produto não encontrado</h2>
            <p>${mensagem}</p>
            <a href="home.html">Voltar para a Home</a>
        </div>
        `
        : '';

        const produtosHTML = PRODUTOS.map(montarCardProduto).join('');

        content.innerHTML = `
        ${aviso}
        <section class="catalog-section">
            <h1>Produtos Petzo</h1>
            <p>Clique em um produto para ver os detalhes.</p>
            <div class="catalog-grid">
                ${produtosHTML}
            </div>
        </section>
        `;
  }

        function mostrarProduto(produto) {
            document.title = `Petzo - ${produto.nome}`;

        const btnBack = document.getElementById('btn-back');
        btnBack.href = `${produto.categoria}.html`;

        localStorage.setItem('produtoSelecionado', produto.id);

        const recomendados = getProdutosByCategoria(produto.categoria, produto.id, 12);
    const recHTML = recomendados.map(p => `
        <a class="rec-item" href="produto.html?id=${p.id}" title="${p.nome}">
            <img src="${corrigirCaminhoImagem(p.imagem)}" alt="${p.nome}" loading="lazy">
        </a>
        `).join('');

        content.innerHTML = `
        <nav class="breadcrumb" aria-label="Localização">
            <a href="home.html">Home</a>
            <span>›</span>
            <a href="${produto.categoria}.html">${produto.categoriaLabel}</a>
            <span>›</span>
            ${produto.nome}
        </nav>

        <main class="product-container">
            <div class="product-gallery">
                <div class="main-image-box">
                    <img
                        src="${corrigirCaminhoImagem(produto.imagem)}"
                        alt="${produto.nome}"
                        id="main-img"
                        onerror="this.style.opacity='.3'; this.alt='Imagem indisponível'">
                </div>

                <div class="gallery-footer">
                    <div class="pagination-dots">
                        <span class="dot active"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>

                    <button class="wishlist-btn" id="wishlist-btn" aria-label="Adicionar aos favoritos" title="Adicionar aos favoritos">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>

            <div class="product-details">
                <span class="product-category-badge">
                    <i class="fa-solid fa-tag"></i>
                    ${produto.categoriaLabel}
                </span>

                <h1 class="product-title">${produto.nome}</h1>
                <div class="product-price">${produto.preco}</div>

                <p class="product-description">${produto.descricao}</p>

                <div class="shipping-box">
                    <div class="cep-input-wrapper">
                        <label for="cep">CEP:</label>
                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            placeholder="00000-000"
                            maxlength="9"
                            oninput="this.value = this.value.replace(/\D/g,'').replace(/^(\d{5})(\d)/,'$1-$2')">
                    </div>

                    <button class="btn-shipping" onclick="calcularFrete()">
                        Calcular frete
                    </button>
                </div>

                <button class="btn-add-to-cart" onclick="adicionarCarrinho()">
                    <i class="fa-solid fa-circle-plus"></i>
                    Adicionar ao Carrinho
                </button>
            </div>
        </main>

        <section class="recommendations">
            <h2 class="rec-title">Encontre mais ${produto.categoriaLabel.toLowerCase()}!</h2>
            <div class="rec-grid">
                ${recHTML || '<p style="font-size:12px;color:#999">Nenhuma recomendação disponível.</p>'}
            </div>
        </section>
        `;

        const wishlistBtn = document.getElementById('wishlist-btn');

        if (wishlistBtn) {
            wishlistBtn.addEventListener('click', () => {
                wishlistBtn.classList.toggle('active');
                const icon = wishlistBtn.querySelector('i');

                if (wishlistBtn.classList.contains('active')) {
                    icon.classList.replace('fa-regular', 'fa-solid');
                    wishlistBtn.setAttribute('aria-label', 'Remover dos favoritos');
                } else {
                    icon.classList.replace('fa-solid', 'fa-regular');
                    wishlistBtn.setAttribute('aria-label', 'Adicionar aos favoritos');
                }
            });
    }
  }

        function calcularFrete() {
    const cep = document.getElementById('cep')?.value.replace(/\D/g, '');

        if (!cep || cep.length < 8) {
            alert('Por favor, informe um CEP válido com 8 dígitos.');
        return;
    }

        alert(`Frete estimado para o CEP ${cep}: R$ 12,90`);
  }

        function adicionarCarrinho() {
    const produto = buscarProduto();
        const btn = document.querySelector('.btn-add-to-cart');

        if (!produto || !btn) return;

        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push(produto.id);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        btn.innerHTML = '<i class="fa-solid fa-check"></i> Adicionado!';
        btn.style.background = 'var(--teal-btn)';
        btn.style.color = 'var(--white)';

    setTimeout(() => {
            btn.innerHTML = '<i class="fa-solid fa-circle-plus"></i> Adicionar ao Carrinho';
        btn.style.background = '';
        btn.style.color = '';
    }, 2000);
  }

        if (typeof PRODUTOS === 'undefined' || typeof getProdutoById !== 'function') {
            content.innerHTML = `
      <div class="not-found">
        <h2>Erro ao carregar produtos</h2>
        <p>O catálogo foi incorporado neste arquivo. Verifique se o código foi colado completo.</p>
        <a href="home.html">Voltar para a Home</a>
      </div>
    `;
  } else {
    const produtoAtual = buscarProduto();

        if (produtoAtual) {
            mostrarProduto(produtoAtual);
    } else if (idUrl) {
            mostrarCatalogo('O produto que você está procurando não existe ou o ID está incorreto.');
    } else {
            mostrarCatalogo();
    }
  }