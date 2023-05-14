// alert("Óla");

//passo 1 - pegar o elemento correpondente ao botão de troca de tema

const botaoAlterarTema = document.getElementById
    ("botao_alterar_tema");

console.log(botaoAlterarTema)

//passo 2 - pegar no JS o elemento HTML correspondente ao <body>

const body = document.querySelector("body");
console.log(body);

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//passo 3 - dar um jeito de identificar o click do mouse no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
    //passo 6 - remover a clase do modo-escuro do body
    const modoEscuroAtivo = body.classList.
        contains("modo-escuro")
    if (modoEscuroAtivo) {
        // console.log("modo escuro ativo");

        //passo 7 - remover a classe do modo escuro do body
        body.classList.remove("modo-escuro")

        //pass 8 - trocar a imagem do botão de alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/sun.png");
    } else {

        // passo 4 - adicionar a classe modo-escuro no body
        body.classList.add("modo-escuro");

        // passo 5 - trocar imagem do botão de alterar botão
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/moon.png");

    }




})

