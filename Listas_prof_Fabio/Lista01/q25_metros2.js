const input = require('prompt-sync')()

//Entrada
const m = Math.trunc(input('Digite o valor em m:'))

//Processamento
const km = m / 1000

//Saída
console.log(m,'m', 'é igual a', km, 'km')