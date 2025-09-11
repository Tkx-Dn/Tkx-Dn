const numeros = [1, 2, 3, 4, 5, 6, 7]
//Divisão sempre vai ser inteira EX: 5%2 = 1 | Pares = 0, Impares = 1
const todosSao = numeros.every(numero => numero % 2 === 0);

console.log(todosSao);
