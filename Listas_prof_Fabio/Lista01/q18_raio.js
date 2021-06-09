const input = require('prompt-sync')()
//Entrada
const pi = 3.14
const raio = Number(input('Digite o valor do raio:'))

//Processamento
const comprimento = 2 * pi * raio

// Saída
console.log('O comprimento da circunferência é', comprimento, 'm')