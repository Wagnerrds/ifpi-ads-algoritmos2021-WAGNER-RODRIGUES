const input = require('prompt-sync')()
//Entrada
const custo_fabrica = Number(input('Digite o valor do custo de fábrica:'))

//Processamento
const porcentagem_distribuidor = custo_fabrica * (28/100)
const impostos = custo_fabrica * (45/100)
const custo_consumidor = custo_fabrica + porcentagem_distribuidor + impostos
//Saída
console.log('O preço para o consumidor é R$', custo_consumidor)