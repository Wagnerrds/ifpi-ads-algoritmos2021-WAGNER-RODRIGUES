const input = require('prompt-sync')()


//Entrada
const valor_dolar = Number(input('Digite o valor do dólar($):'))
const dólar = Number(input('Digite o valor em dólares:'))



//Processamento
const dólar_real = valor_dolar * dólar

//Saída
console.log (dólar, 'US$', 'é igual a', 'R$', dólar_real)
