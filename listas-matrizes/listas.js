// Criar uma lista
let nomes = ["Pedro","Lucas","João","José"];
console.log(nomes)

// Acessar um valor
console.log(nomes[2])

// Retornando o tipo da variável
console.log(typeof nomes);

// Criando um objeto via instancia
const numeros = new Array();
console.log("Antes", numeros);

// Como adicionar itens em uma lista
numeros.push(2);
numeros.push(18);
numeros.push(8);
console.log("Depois", numeros);

// Como apagar uma lista
numeros.shift();
console.log(numeros);
numeros.shift();
console.log(numeros);
