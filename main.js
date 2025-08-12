'use stricts'

import funcionarios from "./funcionarios.json" with {type: "json"}

console.log(funcionarios)

function criarFuncionario(scrImagem) {
    const cards = document.createElement('div')
    const quadro = document.getElementById('quadro')
    const img = document.createElement('img')
    const nome = document.createElement('h2')
    const cargo = document.createElement('span')
    cards.classList.add('cards')
    img.classList.add('img')
    img.scr = scrImagem.imagem
   
    quadro.appendChild(cards)
    cards.appendChild(img)

}

function carregarFuncionarios() {
    const quadro = document.getElementById('quadro')

    funcionarios.forEach(criarFuncionario)
}

carregarFuncionarios()