
/*1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

let nota1 = 7;
let nota2 = 7;
let nota3 = 7;

var media = nota1 + nota2 + nota3 / 3;
if (media >= 7){
    console.log('Aprovado');
} else if ( media < 5){
    console.log('Reprovado')
}else{
    if(!media > 5 && media < 7) return;
    console.log('recuperação')
}



/* 2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;

*/

let altura = 120
let peso = 70
var IMC = peso / (altura * altura)

    if (IMC < 18.5){
        console.log('Abaixo do peso');
    }else if ( 18.5 > IMC < 25){
        console.log('Peso normal');
    }else if ( 25 > IMC < 30){
        console.log('Acima do normal');
    }else if ( 30 > IMC < 40){
        console.log('Obeso');
    }else{
        console.log('Obesidade grave');
    }


/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


var pagamento, valorproduto;

valorproduto = 20;
// 0 = DEBITO , 1 = DINHEIRO, 2 = DUAS VEZES, 3 = ACIMA DE DUAS VEZES 
pagamento = 0
var parcelas = 3

if(pagamento > 3 || pagamento < 0) return;
    if(pagamento === 0 ){
    let produto = (valorproduto * 10)/100
    let valoragora = valorproduto - produto;
    console.log(`À vista Débito, recebe 10% de desconto o valor fica ${valoragora.toFixed(2)}`)
    }else if(pagamento === 1 ){
        let produto = (valorproduto * 15)/100
        let valoragora = valorproduto - produto;
        console.log(`À vista no Dinheiro ou PIX, recebe 15% de desconto o valor fica ${valoragora.toFixed(2)}`)
    }else if(pagamento === 2 ){
        let valoratual =  valorproduto / 2;
        console.log(`Você pagará duas parcelas de ${valoratual.toFixed(2)} no total ficará por, ${valorproduto.toFixed(2)}`);
    }else if(pagamento === 3 ){
        let produto = (valorproduto * 10)/100
        let valoragora = valorproduto + produto;
        let parcelasapagar = valoragora / parcelas
        console.log(`Acima de duas vezes, preço normal de etiqueta mais juros de 10% o valor fica ${valoragora.toFixed(2)} em ${parcelas} de ${parcelasapagar.toFixed(2)}`)
    }
