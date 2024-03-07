// Resposta da questão 5

// Eu instalei o módulo prompt-sync do NPM do node para conseguir fazer a leitura dos dados digitados no terminal
const entrada = require('prompt-sync')({sigint: true}) // a variável entrada será o comando para ler o que foi digitado

const string = String(entrada('Digite a string: '))

let stringInvertida = ''

for(let index = string.length -1; index >= 0; index--) {
    stringInvertida += string[index]
}

console.log(stringInvertida) // string invertida