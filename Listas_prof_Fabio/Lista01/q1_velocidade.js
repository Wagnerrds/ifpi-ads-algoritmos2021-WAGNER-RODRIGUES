//De m/s para km/h multiplicar por 3.6
const input = require('prompt-sync')()

//Entrada
const velocidade_ms = Number(input('Digite a velocidade em m/s: '))


//Processamento
const velocidade_km = velocidade_ms * 3.6

//Saída
console.log('A velocidade', velocidade_ms, 'm/s')
console.log ('É igual a:', velocidade_km, 'km/h' )