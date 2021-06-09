const input = require('prompt-sync')()

//Entrada
const minutos = Number(input('Digite os minutos: '))


// Processamento
const minutos_para_horas_e_minutos = minutos / 60


// Saída
console.log (minutos, 'min', 'é igual a:', minutos_para_horas_e_minutos, 'horas')