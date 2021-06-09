const input = require('prompt-sync')()
function main(){
    //Entrada
    const leitura_atual = Number(input('Digite a leitura atual:'))
    const leitura_anterior = Number(input('Digite a leitura anterior:'))
    //Processamento
    //Cálculo do Talão de Energias
    const diferenca_do_consumo = leitura_atual - leitura_anterior
    let consumo_total
    if ( diferenca_do_consumo <= 30){
        consumo_total = 0
    } else if(diferenca_do_consumo > 30 && diferenca_do_consumo <= 100){
        consumo_total = diferenca_do_consumo * 0.59
    }else{
        consumo_total = diferenca_do_consumo * 0.75
    }
    const icms = consumo_total * 0.25
    const pis_confis = consumo_total * 0.15
    let iluminacao = consumo_total * 0.06

    if ( diferenca_do_consumo < 80){
        iluminacao = 0
    }
    const bandeira = Math.trunc(diferenca_do_consumo / 100) * 8
    const valor_final = consumo_total + icms + pis_confis + bandeira + iluminacao
    //Saída
    console.log(`O consumo foi ${diferenca_do_consumo} KWh`)
    console.log(`O valor faturado é R$${consumo_total.toFixed(2)}`)
    console.log(`O valor da bandeira é R$${bandeira.toFixed(2)} `)
    console.log(`Valor do ICMS: ${icms.toFixed(2)}`)
    console.log(`O valor do PIS/ CONFIS é ${pis_confis.toFixed(2)}`)
    console.log(`O valor da taxa de iluminação é R$${iluminacao}`)
    console.log (`O valor o total é R$${valor_final.toFixed(2)}`)
}
main()