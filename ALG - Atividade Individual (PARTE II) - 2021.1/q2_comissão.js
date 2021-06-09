const input = require('prompt-sync')()
function main(){
    //Entrada
    var nome_do_vendendor = input("Digite o seu nome:")
    var valor_total_vendas = input(" Qual o total de vendas do mês:")
    //Processamento
    if (valor_total_vendas > 5000 && valor_total_vendas <= 1000){
        comissao = (valor_total_vendas - 5000) * (5/100)
    }else if ( valor_total_vendas <= 5000){
        comissao = 0
    }else if (valor_total_vendas > 10000 && valor_total_vendas <= 30000){
        comissao = ((valor_total_vendas - 5000) * (5/100) + (valor_total_vendas - 10000) * (10/100))
    }else if (valor_total_vendas > 30000){
        comissao = valor_total_vendas * (20/100)
    }
    const salario_fixo = 1100
    var salario_final = salario_fixo + comissao

    //Saída
    console.log(`O vendedor: ${nome_do_vendendor}`)
    console.log(`O valor total das vendas do mês foi R$ ${valor_total_vendas}`)
    console.log(`O salário base é R$ ${salario_fixo}`)
    console.log(`A comissão foi de R$${comissao}`)
    console.log(`O salário final é R$${salario_final}`)



}
main()