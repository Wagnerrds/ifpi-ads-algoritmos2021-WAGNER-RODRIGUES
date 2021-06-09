const input = require('prompt-sync')()

//Entrada
const x1 = Number(input('Digite o X1:'))
const y1 = Number(input('Digite o Y1:'))
const x2 = Number(input('Digite o X2:'))
const y2 = Number(input('Digite o Y2:'))

//Procesamento
const r1 = Math.pow((x2 - x1),2)
const r2 = Math.pow((y2 - y1),2)
const distancia = Math.sqrt(r1 + r2)


//Saída
console.log('A distância entre os ponto é', distancia)