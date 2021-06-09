const input = require('prompt-sync')()
//Entrada
const latao = input('Digite a quantidade de latão em kg:')

//Processamento
const cobre = latao * (70/100)
const zinco = latao * (30/100)

//Saída
console.log(`Para obter ${latao} kg de latão, serão necessárias ${cobre} kg de cobre e ${zinco} kg de zinco`)