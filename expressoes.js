//expressao de funcoes

const soma = function(num1, num2){
    return num1 + num2;
}

console.log(soma(1,1));

//chamando a função antes de executar
console.log(digaOi());

function digaOi(){
    return "Oi"
}

//neste caso vai dar erro pq subtrair nao foi inicializado 
//Isso se chama Hosting (que é elevar todas as var antes de executar o codigo)
console.log(subtrair(3,2));
const subtrair = function (num1, num2){
    return num1 - num2;
}