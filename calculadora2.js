

// let valorSecreto = 5;


// let respuesta1 = prompt("Adivina el primer numero entre 1 y 5, Primera respuesta.")
// let respuesta2 = prompt("segundo intento");
// let respuesta3 = prompt("tercer intento, si pierdes, no solo perderas el juego :)");


// if( respuesta1 == valorSecreto){
    
// }else if(respuesta2 == valorSecreto){
//     alert("Adivinaste :)");
// }else if( respuesta3 == valorSecreto){
//     alert("Adivinaste :)");
// }else{
//     alert("Ya vamos a por ti :)");
// }

const dniSinLetra = prompt('Introduce tu DNI, sin la letra');

const calcularLetraDNI = (txt) => {

    if (txt.length === 8 && Number(dniSinLetra)) {
        const resto = txt % 23;
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const letra = letras.charAt(resto);
        alert(letra);

    } else {
        return null;
    }
}

const letra = calcularLetraDNI(dniSinLetra);
console.log(letra);