'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}

console.log(funcionarios)

function criarFuncionario(funcionario) {
    const cards = document.createElement('div')
    cards.classList.add('cards')
    
    const nome = document.createElement('h1')
    nome.textContent = funcionario.nome
    
    const cargo = document.createElement('span')
    cargo.textContent = funcionario.cargo

    const img = document.createElement('img')
    
    img.classList.add('img')
    img.src = funcionario.imagem

    document.getElementById('quadro').appendChild(cards)
    cards.append(img, nome, cargo)

}

function carregarFuncionarios() {
    const quadro = document.getElementById('quadro')

    funcionarios.forEach(criarFuncionario)
}

carregarFuncionarios()