const input = require('prompt-sync')()
function main(){
    //Entrada
    const numero1 = Number(input('Digite um número entre 0 e 100: '))
    const numero2 = Number(input('Digite um número entre 0 e 100: '))
    const numero3 = Number(input('Digite um número entre 0 e 100: '))
    //Processamento
    const media_antiga = (((numero1 * 0.26 * 10) + (numero2 * 0.57 * 10) + (numero3 * 0.17 * 10)).toFixed(2))
    const media_nova = (numero1 * 0.62 * 10) + (numero2 * 0.19 * 10) + (numero3 * 0.19 * 10) //Multiplicar por 10 para obter o valor correspondente ao peso em relação a 1000

    if (media_antiga >= 800 && media_antiga <= 1000){
        console.log(`O seu score 1.0 é igual a ${media_antiga} pontos e é MUITO BOM`)
    }else if (media_antiga >= 600 && media_antiga <= 800){
        console.log(`O seu score 1.0 é igual a ${media_antiga} pontos e é BOM`)
    }else if ( media_antiga >= 400 && media_antiga <= 600){
        console.log(`O seu score 1.0 é igual a ${media_antiga} pontos e é REGULAR`)
    }else {
        console.log(`O seu score 1.0 é igual a ${media_antiga} pontos e é BAIXO`)
    }

    if (media_nova >= 701 && media_nova <= 1000) {
        console.log(`O seu score 2.0 é igual a ${media_nova} pontos e é MUITO BOM`)
    }else if (media_nova >= 600 && media_nova <= 800){
        console.log(`O seu score 2.0 é igual a ${media_nova} pontos e é BOM`)
    }else if (media_nova >= 400 && media_nova <= 600){
        console.log(`O seu score 2.0 é igual a ${media_nova} pontos e é REGULAR `)
    }else {
        console.log(`O seu score 2.0 é igual a ${media_nova} pontos e é BAIXO`)
    }
    

    
}
main()
