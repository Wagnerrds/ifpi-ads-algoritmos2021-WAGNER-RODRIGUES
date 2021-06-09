const input = require('prompt-sync')()

//Entrada
const numerador1 = Number(input('Digite o numerador da 1ª fração:'))
const denominador1 = Number(input('Digite o demoninador da 1ª fração:'))
const numerador2 = Number(input('Digite o numerador da 2ª fração:'))
const denominador2 = Number(input('Digite o demoninador da 2ª fração:'))

//Processamento
const novo_numerador = (numerador1 * denominador2) + (denominador1 * numerador2 )
const novo_denominador = denominador1 * denominador2

//Saída
console.log(`O resultado é ${novo_numerador} / ${novo_denominador}`)
