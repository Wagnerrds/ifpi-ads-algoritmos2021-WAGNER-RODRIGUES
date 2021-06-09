const input = require('prompt-sync')()
//Entrada
const base = Number(input('Digite o valor da base:'))
const altura = Number(input('Digite o valor da altura:'))

//Processamento
const area = (base * altura) / 2
//Saída
console.log('A área do triângulo é', area, 'm²')