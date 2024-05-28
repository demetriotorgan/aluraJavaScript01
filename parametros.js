//parametros de funçoes

function soma(num1,num2){
    return num1 + num2;
}

console.log(soma(2,2));
console.log(soma(3,2));

//ordem dos parametros importa 
function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}
console.log(nomeIdade(30,"Demetrio"));
//obs: Como os parametros possuem apenas escopo local, apos a execuçao da função o nome dos parametros estao livres para serem usados novamente


function multiplica(num1, num2){
    return num1*num2
}
console.log(multiplica(soma(2,3), soma(6,5)));


//deixando um parametro de faltando retorna NaN
console.log(multiplica(2,));

//funçao de divisão
function divisao(num1, num2){
    return num1/num2;
}

//na visao por zero recebemos infinity
console.log(divisao(2,0));
