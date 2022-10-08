n = 234;
const array = [];
multiplicar = 1
//soma
soma = 0
while (n > 0){   
    resto = n % 10;
    n = (n - resto)/10;
    soma += resto;
    array.push(resto);
}
//mutiplicar
for(i=0; i<array.length ; i++){
    multiplicar = multiplicar*array[i]
}

console.log(multiplicar - soma)