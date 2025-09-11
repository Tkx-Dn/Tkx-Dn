const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Divisão sempre vai ser inteira EX: 5%2 = 1 | Pares = 0, Impares = 1
const numerosImpares = numeros.filter(numero => numero % 2 === 1);

console.log(numerosImpares);