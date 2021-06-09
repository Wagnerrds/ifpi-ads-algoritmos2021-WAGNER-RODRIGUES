const input = require('prompt-sync')()

//Entrada
const num1 = Number(input('Digite o primeiro número:'))
const num2 = Number(input('Digite o segundo número:'))
const num3 = Number(input('Digite o terceiro número:'))

//Processamento
const media = (num1 + num2 + num3) / 3

//Saída
console.log('A média é', media)