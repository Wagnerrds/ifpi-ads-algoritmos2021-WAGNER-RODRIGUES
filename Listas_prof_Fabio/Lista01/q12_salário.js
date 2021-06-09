const input = require('prompt-sync')()
//Entrada
const salary = Number(input('Digite o seu salário:'))

//Processamento
const acrescimo = salary * (25/100)
const new_salary = salary + acrescimo
//Saída
console.log('O seu novo salário com o acréscimo é ', new_salary)