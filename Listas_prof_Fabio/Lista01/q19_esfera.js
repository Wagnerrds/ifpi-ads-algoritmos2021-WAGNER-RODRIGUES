const input = require('prompt-sync')()
//Entrada
const raio = Number(input('Digite o valor do raio da esfera:'))

//Processamento
const pi = 3.14
const vol_esfera = 4 * pi * (raio **3) / 3

//Saída
console.log('O volume da esfera é', vol_esfera, 'm³')