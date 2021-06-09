const input = require('prompt-sync')()

//Entrada
const horas = Number(input('Digite as horas:'))
const minutos = Number(input('Digite os minutos: '))
//Processamento
const horas_para_minutos =  horas * 60

//Saída
console.log (horas, 'h', 'e', minutos, 'minutos')
console.log ('É equivalente a:', horas_para_minutos + minutos, 'minutos')