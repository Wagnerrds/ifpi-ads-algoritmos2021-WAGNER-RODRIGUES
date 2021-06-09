const input = require('prompt-sync')()

//Entrada
const Number_1 = Number(input('Digite o primeiro número:'))
const Number_2 = Number(input('Digite o segundo número:'))
//Processamento
const soma = Number_1 + Number_2
const subtracao = Number_1 - Number_2
const divisao = soma / subtracao
//Saída
console.log('A divisão da soma pela subtração dos números', Number_1, 'e', Number_1, 'é', divisao)