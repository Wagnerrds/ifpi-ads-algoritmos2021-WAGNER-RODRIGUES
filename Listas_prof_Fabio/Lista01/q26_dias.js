const input = require('prompt-sync')()

//Entrada
const dias = Math.trunc(input('Digite o número de dias:'))

//Processamento
const week = Math.trunc(dias / 7)
const day = dias % 7

//Saída
console.log(dias, 'é igual a', week, 'semanas', 'e', day, 'dias')