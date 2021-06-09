const input = require('prompt-sync')()

function main(){
    //Entrada
    const media_14dias = Number(input('Digite a média de casos há 14 dias:'))
    const media_hoje = Number(input("Digite o número de casos hoje:"))
    //Processamento
    const diferenca = media_hoje - media_14dias
    let variacao = (diferenca * 100) / media_14dias
    //Saída
    if (variacao < 15){
        console.log(`A variação é: ${variacao.toFixed(2)}%, Em estabilidade`)

    }else {
        console.log(`A variação é: ${variacao.toFixed(2)}%, Em alta`)
    }
}
main()