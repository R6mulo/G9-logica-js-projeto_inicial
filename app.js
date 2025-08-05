console.log("Boas Vindas!");
let nome = "Romulo";
console.log(`Olá, ${nome}!`);
alert(`Olá, ${nome}!`);
let linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
console.log("Você gosta de: " + linguagemFavorita);
let valor1 = 8;
let valor2 = 12;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

let valor3 = 15;
let valor4 = 7;
let resultado2 = valor1 - valor2;

console.log(`A subtração entre ${valor3} e ${valor4} é igual a ${resultado2}.`);

let idade = prompt("Qual é a sua idade?");
idade = Number(idade); // Converte a entrada para número

    if (idade >= 18) {
    console.log("Você é maior de idade.");
    } else {
    console.log("Você é menor de idade.");
}

let numero = prompt("Digite um número:");
numero = Number(numero); // Converte a entrada para número

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

let nota = 8; // você pode mudar o valor aqui

if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);
let numeroAleatorio2 = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio2);
let numeroAleatorio3 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAleatorio3);