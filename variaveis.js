//var
// var altura = 5;
// var comprimento =7;
//area = altura * comprimento;
//var area;
//Não retorna erro após o uso antes da declaração
// console.log(area);
//----------------------------------------------------

// //let
// let forma = 'retangulo';
// let altura1 = 5;
// let comprimento1 =7;
// //caso a let seja definida depois do uso retorna erro
// let area;
//     if (forma === 'retangulo'){
//         area = altura1 * comprimento1;
//     } else{
//         area = (altura1 * comprimento1)/2;
//     }

// console.log(area);
//---------------------------------------------

//const
const forma = 'quadrado';
const altura = 5;
const  comprimento =5;
let area; // caso a gente declare como const area; teremos um erro

    if(forma === 'quadrado'){
        area = altura * comprimento;
    } else {
        area = (altura * comprimento)/2
    }
console.log(area);