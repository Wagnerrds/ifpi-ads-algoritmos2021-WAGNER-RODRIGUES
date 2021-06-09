const input = require('prompt-sync')()

//Entrada
const kg = Number(input('Digite o valor em kg:'))

//Processamento
const gramas = kg * 1000

//Saída
console.log(kg,'kg', 'é igual a', gramas, 'g')