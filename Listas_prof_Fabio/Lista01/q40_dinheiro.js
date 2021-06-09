const input = require('prompt-sync')()

//Entrada
const anos = Number(input('Digite a quantidade de anos que você fuma:'))
const num_cigarros = Number(input('Digite a quantidade de cigarros fumados por dia:'))
const preco_carteira = Number(input('Digite o preço de uma carteira de cigarros:'))

//Processamento
const mes = num_cigarros * 30
const ano = mes * 12
const carteira_ano = ano / 20
const gasto_anual = carteira_ano * preco_carteira
const gasto_total = gasto_anual * anos



//Saída
console.log('o fumante gastou R$', gasto_total)
