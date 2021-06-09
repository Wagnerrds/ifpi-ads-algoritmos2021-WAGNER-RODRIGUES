
const input = require('prompt-sync')()

//Entrada
const numero = Number(input('Digite um número com 3 dígitos:'))
//Processamento
const centena = Math.trunc(numero / 100)
const resto = numero % 100
const dezena = Math.trunc((resto / 10))
const unidade = resto % 10

const soma = (centena + dezena + unidade)
//Saída
console.log('A soma dos algarismos do número', numero, 'é', soma)
