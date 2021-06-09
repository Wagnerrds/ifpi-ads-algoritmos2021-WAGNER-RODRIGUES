const input = require('prompt-sync')()

//Entrada   
const numero = Number(input(('Digite um número quatro digitos:')))

//Processamento
const milhar = Math.trunc(numero / 1000)
const resto = Math.trunc(numero % 1000)
const centena = Math.trunc(resto / 100)
const dezena = Math.trunc((resto % 100) / 10)
const unidade = Math.trunc(resto  % 10)

const soma_elemento = Number(milhar + centena + dezena + unidade)

//Saída

console.log('A soma dos elementos é', soma_elemento)