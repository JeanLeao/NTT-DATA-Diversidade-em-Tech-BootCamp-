let x = 11;
valor = 0;
tempo = 0;
deixa2 = 0
const numeros = [];
while (x !== 0){
if  (x%2 !== 0 ){
    x++
}
valor = x
for(i=0; i<5; i++){
    numeros.push(valor);
    valor = valor + 2
}


//Imprima a soma:
soma = 0;

    for(var i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

//gambiarra da porra SUCESSAGEM
deixa2++
console.log(deixa2)
if (deixa2 < 2){
    console.log(soma);
}
}