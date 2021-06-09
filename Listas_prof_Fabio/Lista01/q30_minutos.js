const input = require('prompt-sync')()
//Entrada
const min = input('Digite o número de minutos:')

//Processamento
const dias = Math.trunc(min / 1440)
const horas = Math.trunc(min / 60)
const resto_min = min % 60

//Saída
console.log(min, 'minutos tem', dias, 'dias', horas, 'horas', 'e', resto_min, 'minutos')