const input = require('prompt-sync')()
//Entrada
const month = input('Digite o número de meses:')

//Processamento
const year = Math.trunc(month / 12)
const resto_month = month % 12
//Saída
console.log(month,'meses têm', year, 'anos e', resto_month, 'meses')