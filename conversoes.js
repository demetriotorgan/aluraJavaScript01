//conversao implicita
const numero = 1;
const numeroString = "1";

console.log(numero === numeroString); //comparando valor e tipo
console.log(numero == numeroString); //comparando valor

//somando
console.log(numero + numeroString);


//Conversao Explicita
//Number()
//String()

console.log(numero + Number(numeroString));
const num1 = "123a";
console.log(Number(num1));