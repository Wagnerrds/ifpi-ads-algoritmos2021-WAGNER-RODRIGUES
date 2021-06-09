const input = require('prompt-sync')()

//Entrada
const km = Number(input('Digite o valor em km:'))

//Processamento
const metros = km * 1000

//Saída
console.log(km,'km', 'é igual a', metros, 'm')