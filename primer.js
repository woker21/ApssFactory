


// if (10 == 10){ 
//     console.log('You got a true!')
// }else (
//     console.log('You got a false!')
// )



// const examen =  10;

// if(examen == 10){
//     console.log("Excelente desempeño");
// }else if(examen => 5){

//     console.log("Esfuerzate mas");
// }else{
//     console.log("Reprobaste");
// }


// let a = 1;
// let b = 1;


// console.log(a > b ? 'a es mayor que b' : (a < b ? 'b es mayor que a' : 'son iguales'));




// const color = 'amarillo';
// switch(color) {
// 	case 'rojo':
// 		console.log('Has escogido rojo');
// 	break;
// 	case 'azul':
// 		console.log('Has escogido azul');
// 	break;
// 	//Inserta tu código aquí
//     case 'amarillo':
//         console.log("has escogido el amarillo");
//         break;
// 	default:
// 		console.log('No has escogido ningún color de la lista!');
// }



// for(let i=0; i<100; i++){
// 	console.log(i);
// }

// for (let i = 0; i < 100; i+= 2) {
//     if (i > 2 && i < 4) {
//         continue;
//     }
//     console.log(i);
// }



// // Definimos la cantidad de números de la secuencia Fibonacci que queremos generar
// const num = 20;

// let a = 0;
// let b = 1;

// console.log("Secuencia de Fibonacci:");

// // Imprimimos los primeros dos números de la secuencia
// console.log(a);
// console.log(b);

// // Generamos el resto de la secuencia usando un bucle for
// for (let i = 2; i < num; i++) {
    
//     let temp = a + b;
//     a = b;
//     b = temp;

//     console.log(temp);
// }



// let random = Math.random();
// while (random > 0.5) {
//     random = Math.random();
//     console.log(random);
// }


// for(let i =1; i<=9; i++){
//     for (let j = 1; j <= 9; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }   
// }


// let valor = 5;

// while(valor >= 0){
// 	console.log(valor);
// 	valor--;
// }



//funciones

//Calcular Cubo
// function calcularCubo(num){
    

//     const r = num * num *num;
//     console.log(r);
// }

// calcularCubo(3)


// //Calcular area
// function calcularArea (ancho, alto){
//     const area = ancho * alto;

//     console.log(area);
// }

// calcularArea(20,10)

// function calcularTriangulo(base, altura){
//     const area = base * altura/2;
//     console.log(area);
// }

// calcularTriangulo(10, 10)

// function echo(e){

//     console.log(e);    
// }

// echo('holas');

// function saludar(saludo){

// console.log('hola ' + saludo);
// }


// saludar("greta");



// function test(val) {

// 	if (val >= 10 && val <= 20) {
        
// 		return "Inside";
// 	}else {
// 		return "Outside";
// 	}
// }

// console.log(test(12));



// function testElse(val) {
// 	let result = "";
// 	if (val > 5) {
// 		result = "Mayor que 5";
// 	} else if (val <= 5) {
//         result = "Menor o igual a 5"
//     }
// 	return result;
// }


// console.log(testElse(6));



// function hola(nombre) {
// 	return "Hi " + nombre + "!";
// }

// const h1 = hola("Selva");
// const h2 = hola("Pola");
// const x = h1 +  " " + h2;
// console.log(x); 


// function duplica(nombre) {
// 	return nombre + " and " + nombre;
// }

// const t = duplica("Roy");
// console.log(t);


// function testSize(num) {
// 	return "Change Me"; // Quitar esta línea y poner en su lugar la lógica pertinente (bloques de tipo if/else)
// }


// function nand(t,f){

// 	if (t == true && f == true) {
// 		console.log(t + f);
// 	}else{
// 		console.log(t + f);
// 	}
// }


// nand(false, false);


// let users = {
// 	name: 'eric',
// 	apellido: 'alaa',
// 	funciones: {
// 		programador: 'Sr',
// 		exp: '12 years'
// 	}
// }

// console.log(users.funciones)


const cosas = (num)=>{

	console.log(num * num * num);
}

cosas(2);


const prueba1 = (ancho, alto)=>{
	console.log(ancho * alto);
}
prueba1(24, 10);

const prueba2 = (base, altura)=>{
	console.log(base*altura/2);
}

prueba2(10, 20);


const circuferencia = radio=>Math.PI*radio * radio;
	

console.log(circuferencia(10));