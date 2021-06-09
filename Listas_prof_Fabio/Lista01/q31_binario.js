const input = require('prompt-sync')()

//Entrada   
const numero = Number(input(('Digite um número quatro digitos:')))

//Processamento
const milhar = Math.trunc(numero / 1000)
const resto = Math.trunc(numero % 1000)
const centena = Math.trunc(resto / 100)
const dezena = Math.trunc((resto % 100) / 10)
const unidade = Math.trunc(resto  % 10)
const decimal = unidade * Math.pow(2,0) + dezena * Math.pow(2,1) + centena * Math.pow(2,2) + milhar * Math.pow(2,3)


//Saída
console.log('O equivalente na base decimal é', decimal)