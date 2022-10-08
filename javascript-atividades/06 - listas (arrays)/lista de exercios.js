
/*1) Crie um programa que dado um número imprima a sua tabuada.*/
var numero = 1
for (let i = 0; i <= 10; i++) {
   console.log(`${numero} x ${i} = ${numero*i}`)
}

/*2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.*/

var numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}

console.log(numerosPares);

/*3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".*/

VOU TER Q FAZER ESSA PORRA

/*4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;*/

var numerosPares = [];

for (let i = 0; i < 51; i = i + 2) {
    numerosPares.push(i);
}

console.log(numerosPares);

/*5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]*/

   var todasnotas = [2, 7, 3, 8, 10, 4];
   for (let i = 0; i <= todasnotas.length; i++) {
         if(todasnotas[i] < 5){
            console.log(todasnotas[i]);
      }
   }

/*6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/

   var todasnotas = [2, 7, 3, 8, 10, 4];
   var notaguardada = 0
   for (let i = 0; i < todasnotas.length; i++) {
      if (!todasnotas[i] > 0) return;
         if(todasnotas[i] > notaguardada){
            notaguardada = todasnotas[i]
      }
   }
   console.log(notaguardada);