const input = require('prompt-sync')()

//Entrada
const nota1 = Number(input('Digite a primeira nota:'))
const peso1 = Number(input('Digite o peso:'))
const nota2 = Number(input('Digite a segunda nota:'))
const peso2 = Number(input('Digite o peso:'))
const nota3 = Number(input('Digite a terceira nota:'))
const peso3 = Number(input('Digite o peso:'))


//Processamento
const soma_peso = peso1 + peso2 + peso3
const media_ponderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / soma_peso



//Saída
console.log('A média ponderada das três notas é', media_ponderada)