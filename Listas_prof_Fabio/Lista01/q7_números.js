const input = require('prompt-sync')()
//ENTRADA
const Number_1 = Number(input('Digite o primeiro número:'))
const Number_2 = Number(input('Digite o segundo número:'))
const Number_3 = Number(input('Digite o terceiro número:'))

//PROCESSAMENTO
const soma = Number_1 + Number_2
const subtracao = Number_2 - Number_3
//SAÍDA
console.log('A soma dos dois primeiros números é', soma)
console.log('A diferença entre os dois últimos é', subtracao)