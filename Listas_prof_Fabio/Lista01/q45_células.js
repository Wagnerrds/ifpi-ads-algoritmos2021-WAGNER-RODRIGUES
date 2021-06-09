const input = require('prompt-sync')()

//Entrada
const dinheiro = Number(input('Digite o valor em R$:'))

//Processamento
const R$50 = Math.trunc(dinheiro/50)
const resto = Math.trunc(dinheiro % 50)
const R$10 = Math.trunc(resto / 10)
const R$5 = Math.trunc((resto % 10) / 5)
const R$1 = Math.trunc(resto % 10)

//Saída
console.log(`${R$50} células de R$50`)
console.log(`${R$10} células de R$10`)
console.log(`${R$5} células de R$5`)
console.log(`${R$1} células de R$1`)