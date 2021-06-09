const input = require('prompt-sync')()

//Entrada   
const numero = Number(input(('Digite um número com três digitos:')))

//Processamento
const centenas = Math.trunc(numero / 100)
const resto = numero % 100
const dezenas = Math.trunc(resto / 10)
const unidades = resto % 10
const novo_numero = unidades * 100 + dezenas * 10 + centenas
const diferenca = Number(numero - novo_numero)

//Processamento
console.log('A diferença entre', numero, 'e', novo_numero, 'é', diferenca)