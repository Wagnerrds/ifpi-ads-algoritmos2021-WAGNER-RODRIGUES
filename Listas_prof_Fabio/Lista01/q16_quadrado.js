const input = require('prompt-sync')()
//Entrada
const lado = Number(input('Digite o valor do lado do quadrado:'))


//Processamento
const area = lado * lado 

//Saída
console.log('A área do quadrado é', area, 'm²')