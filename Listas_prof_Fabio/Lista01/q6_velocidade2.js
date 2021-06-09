const input = require('prompt-sync')()

//Entrada
const velocidade_km = Number(input('Digite a velocidade em km/h:'))


//Processamento
const velocidade_ms = velocidade_km / 3.6


//Saída
console.log('A velocidade', velocidade_km, 'km/h', 'é', velocidade_ms, 'm/s')