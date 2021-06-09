const input = require('prompt-sync')()

//Entrada
const fahrenheit = Number(input('Digite a temperatura em °F:'))

//Processamento
const celsius = (5 * fahrenheit - 160) / 9

//Saída
console.log(fahrenheit,'°F', 'equivale a', celsius,'°C')