const input = require('prompt-sync')()

//Entrada
const a = Number(input('Digite o primeiro número:'))
const b = Number(input('Digite o segundo número:'))
const c = Number(input('Digite o terceiro número:'))

//Processamento
const r = Math.pow((a + b), 2)
const s = Math.pow((b + c), 2)
const d = ( r + s) / 2

//Saída
console.log('O valor da expresão é', d)