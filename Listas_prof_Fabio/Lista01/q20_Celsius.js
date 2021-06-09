const input = require('prompt-sync')()

//Entrada
const celsius = Number(input('Digite a temperatura em °C:'))

//Processamento
const fahrenheit = (9 * celsius + 160) / 5
//Saída
console.log(celsius,'°C', 'equivale a', fahrenheit, '°F')