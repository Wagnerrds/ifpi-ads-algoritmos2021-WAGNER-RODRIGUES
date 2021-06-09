const input = require('prompt-sync')()

//Entrada
const num_1 = Math.trunc(input('Digite o primeiro número:'))
const num_2 = Math.trunc(input('Digite o segundo número:'))

//Processamento
const quociente = (num_1 / num_2)
const resto = num_1 % num_2

//Saída
console.log('O quociente da divisão é', quociente, 'e o resto é', resto)