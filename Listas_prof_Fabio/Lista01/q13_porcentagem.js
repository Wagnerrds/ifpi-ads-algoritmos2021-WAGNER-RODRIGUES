const input = require('prompt-sync')()
//Entrada
const value = Number(input('Digite um valor em R$:'))
//Processamento
const percentage = value * (70/100)

//Saída
console.log('70% de', 'R$', value, 'corresponde a', 'R$', percentage)