

/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/
const gasolina = 3;
class Carros {
    marca;
    cor;
    combukilometro;
    percursokilometro;
    reais;
    constructor(marca, cor, combukilometro, percurso) {

        this.marca = marca;
        this.cor = cor;
        this.percursokilometro =  percurso;
        var gastokm = gasolina * combukilometro;
        this.reais =  percurso * gastokm;

    }

    descrever() {
        console.log(`Gasto desse veiculo é de ${this.reais}`);  
    }
}




/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/


class Imc {
    nome;
    peso;
    altura;
    imc;
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.idade = peso;
        this.altura = altura;
        this.imc = peso / (altura*altura)
    }

    descrever() {
        console.log(` ${this.nome} tem imc de: ${this.imc}`);  
    }
}

const Jose = new Imc('José', 70, 175).descrever();


