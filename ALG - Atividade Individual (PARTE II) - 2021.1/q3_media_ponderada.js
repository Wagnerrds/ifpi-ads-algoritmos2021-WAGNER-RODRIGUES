const input = require('prompt-sync')()
function main(){
    
    //Entrada
    const nome_aluno = input('Digite o seu nome:')
    const avaliacao1 = Number(input('Digite a nota 1:'))
    const avaliacao2 = Number(input('Digite a nota 2:'))
    const atividades = Number(input('Digite a nota das atividades:'))
    //Processamento
    const media_ponderada = (avaliacao1 * (20/100) +  avaliacao2 * (30/100) +  atividades * (10/100)) / (60/100)
    
    if (media_ponderada >= 7 ){
        console.log(`O aluno foi aprovado`)
    }else if(media_ponderada < 4){
        console.log('O aluno foi reprovado, você precisará realizar a prova final')
    }else{ 
        console.log(' Você não foi aprovado')
        const nota_prova_final = Number(input(`Digite a nota da prova final (PF):`))
        prova_media_final = (media_ponderada + nota_prova_final) / 2
    if (prova_media_final >= 6){
        console.log(`O aluno foi aprovado na prova final`)
    }else{
        console.log(`O aluno foi reprovado na prova final`)
    }
    }
    //Saída
    console.log(`Aluno: ${nome_aluno}`)
    console.log(`Média semestral ${media_ponderada}`)
    




}
main()