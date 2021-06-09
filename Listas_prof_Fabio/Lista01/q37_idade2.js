const input = require('prompt-sync')()
//Entrada
const days = Number(input('Digite a sua idade em dias:'))

//Processamento
const days_for_years = Math.trunc(days / 365)
const remainder = days % 365
const days_for_month = Math.trunc(remainder / 30)
const remaining_days = Math.trunc( remainder % 30)

//Saída
console.log(days,' dias são', days_for_years, 'anos', days_for_month, 'meses e', remaining_days, 'dias')