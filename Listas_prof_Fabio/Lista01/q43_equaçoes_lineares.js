const input = require('prompt-sync')()


//Entrada
const a = Number(input('Digite os coeficiente a:'))
const b = Number(input('Digite os coeficiente b:'))
const c = Number(input('Digite os coeficiente c:'))
const d = Number(input('Digite os coeficiente d:'))
const e = Number(input('Digite os coeficiente e:'))
const f = Number(input('Digite os coeficiente f:'))

//Processamento
const x = (c * e - b * f) / (a * e  - b * d)
const y = (a * f - c * d) / (a * e - b * d)
const equacao1 = (a * x + b * y)
const equacao2 = (d * x + e * y)


//Saída
console.log('O valor de x é', equacao1, 'e y é', equacao2)