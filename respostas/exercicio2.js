// Resposta da questão 2

// Eu instalei o módulo prompt-sync do NPM do node para conseguir fazer a leitura dos dados digitados no terminal
const entrada = require('prompt-sync')({sigint: true}) // a variável entrada será o comando para ler o que foi digitado

function estaNaSequencia(numero) {

    if(numero === 0 || numero === 1) return true // não preciso nem iterar caso o número seja 0 ou 1

    let sequencia = [0,1] // esse Array fica atualiando a sequencia fibonacci até passar o número informado
    let incremetador = 1 // variável que recebe os novos valores da sequencia
    let guardaIncremetador = 0 // variável que guarda os novos valores da sequencia para adicionar no array depois que a variável inicio mudado

    while(incremetador <= numero) {
        guardaIncremetador = incremetador
        incremetador += sequencia[sequencia.length - 1]

        if(incremetador === numero) return true

        sequencia.push(guardaIncremetador)
    }

    return false
}

const numero = Number(entrada('Digite um número: ')) // recebendo o número
const numeroSequencia = estaNaSequencia(numero) // verificando se está na sequencia fibonacci

console.log(numeroSequencia)