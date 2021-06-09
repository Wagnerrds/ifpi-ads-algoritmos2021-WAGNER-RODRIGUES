const input = require('prompt-sync')()

//Entrada
const year = Number(input('Digite os anos:'))
const month = Number(input('Digite os meses:'))
const days = Number(input('Digite os dias:'))


//Processamento
const year_for_month = year * 365
const month_for_days  = month * 30
const total_days = year_for_month + month_for_days + days

//Saída
console.log('A quantidade de dias é', total_days)