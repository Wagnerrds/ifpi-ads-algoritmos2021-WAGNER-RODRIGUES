const input = require('prompt-sync')()
//Entrada
const valorProduto = Number(input('Digite o valor da mercadoria R$:'))
//Processamento
const parcela = Math.trunc( valorProduto / 3)
const resto = valorProduto % 3
const entrada = Math.trunc(parcela + resto)

//Processamento
console.log(`A entrada será R$ ${entrada} e duas parcelas de R$ ${parcela} `)
