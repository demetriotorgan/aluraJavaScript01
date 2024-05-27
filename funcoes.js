//funçoes

//1-Declaração de função
function imprimeTexto(texto){
    console.log(texto);
}

imprimeTexto("oi");
imprimeTexto("Esta é minha função");

function soma(){
    // const resultado = 2+2;
    return 2+2;
}
console.log(soma());

//chamando uma função dentro de outra função
imprimeTexto(soma());