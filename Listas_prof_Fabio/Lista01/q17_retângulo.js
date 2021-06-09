const input = require('prompt-sync')()
//Entrada
const base = Number(input('Digite o valor da base:'))
const altura = Number(input('Digite o valor da altura:'))

//Processamento
const area = base * altura


//Saída
console.log('A área do retângulo', area, 'm²')