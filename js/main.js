/*var i = 0;
var j = 1;

var resultado = 0;

resultado = i + j; 

console.log(resultado);

var nombre = "Antonio";
var apellido = "Dominguez";

console.log(nombre + " " + apellido);

Vamos a intelectuar con el html

document.getElementById("demo").innerHTML = "Hola JavaScript";

document.getElementsByTagName("body")[0].innerHTML = "Hola Clase";

document.getElementsByClassName("demo")[0].innerHTML = "Hola clase JavaScript";

var body = document.getElementsByTagName("body")[0];

body.innerHTML = "Sigo aqui";
*/
/*
function suma(){
	console.info("vamos a sumar")
	var num1 = document.getElementById("num1").value; 
	var num2 = document.getElementById("num2").value; 

	console.log(num1, num2);
}
*/
function igual(){
	var num1 = document.getElementById("num1").value; 
	var num2 = document.getElementById("num2").value;
	var op = document.getElementById("op").value;
	//resultado = document.getElementById("resultado");//inteactual con el span del html
	//paserInt para forzar que sea numeros
	var span_resultado = document.getElementById("resultado");
	var resultado2 = document.getElementById("resultado2");
	//span_resultado.innerHTML = parseInt(num1) + parseInt(num2);
	//span_resultado.innerHTML = parseInt(num1) * parseInt(num2);
	if (op == "+") {
		console.log("");
		span_resultado.innerHTML = parseInt(num1) + parseInt(num2);
		resultado2.value = parseInt(num1) + parseInt(num2);
	}

	if (op == "-") {
		console.log("");
		span_resultado.innerHTML = parseInt(num1) - parseInt(num2);
		resultado2.value = parseInt(num1) - parseInt(num2);
	}

	if (op == "*") {
		console.log("");
		span_resultado.innerHTML = parseInt(num1) * parseInt(num2);
		resultado2.value = parseInt(num1) * parseInt(num2);
	}

	if (op == "/") {
		console.log("");
		span_resultado.innerHTML = parseInt(num1) / parseInt(num2);
		resultado2.value = parseInt(num1) / parseInt(num2);
	}
}

