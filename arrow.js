//Resumo:

//Tipo 1: Declarativa

var mostrarNome11 = new Function("console.log('Minha função')");

//Tipo 2: 

function mostrarNome22(){
    return console.log('Minha função');
}

//Tipo 3:
const mostrarNome3 = function(){
    return console.log('Minha função')
}

//Tipo 4: Arrow Function
const mostrarNome33 = ()=>{
    return console.log('Meu nome');
}

const mostrarNome = nome => 'Meu nome é Demetrio';
const soma = (num1, num2) => num1+num2;

const menorNumero = (num1, num2) => {
    if(num1 > 10 || num2 >10){
        return "Digite somente números entre 1 e 10";
    } else {
        return num1 + num2;
    }
}

console.log(menorNumero(2,3));