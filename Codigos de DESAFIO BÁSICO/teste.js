var a = 5;
var N = 20;
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

const numeros = [];
var soma = 0;
for (let i = 0; i < N; i++ ) {
 z = i * a;
 if( z < N+1){
     numeros.push(z);
    }
}

for(var i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);