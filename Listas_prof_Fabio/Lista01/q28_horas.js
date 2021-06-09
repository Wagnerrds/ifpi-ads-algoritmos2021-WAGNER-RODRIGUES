const input = require('prompt-sync')()

//Entrada
const hours = Math.trunc(input('Digite o número de horas:'))

//Processamento
const week = Math.trunc(hours / 168)
const days = Math.trunc(hours / 24)
const resto_horas = hours % 24



//Saída
console.log(hours, 'horas', 'é igual a', week, 'semanas', days, 'dia(s)', 'e', resto_horas ,'horas')