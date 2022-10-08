let N = 45;
moedas = 0
apuradas = 0 
for(i = 0 ; N > i; i++) {
    moedas++
    apuradas = N - moedas
    N = apuradas
}
console.log(moedas)
