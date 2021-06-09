const input = require('prompt-sync')()

//Entrada
const seconds = Math.trunc(input('Digite o número de segundos:'))

//Processamento
const hour = Math.trunc(seconds / 3600)
const minutes = Math.trunc((seconds % 3600 / 60)) 
const sec_remainder = seconds % 60

//Saída
console.log(seconds, 'segundos', 'é igual a',hour, 'horas', minutes, 'minutos', 'e', sec_remainder, 'segundos')