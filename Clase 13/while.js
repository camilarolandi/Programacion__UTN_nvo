/* PRINCIPIO de programacion DRY: dont repeat yourself  */


/* solicitar nombre al usu. si es pepe SEGUIR solicitar que ingrese nuevamente 
si es distitno de pepe decir no conozco ese nombre.
 */

/* let nombre = prompt("Ingrese nombre")
while(nombre === "pepe"){
    nombre = prompt("Ingrese nombre")
}
alert("Ese nombre lo conozco") */


let nombre = prompt("Ingrese nombre")
while(!nombre || nombre !== "Pepe" ){
    alert("ERROR: El dato ingresado es incorrecto")
    nombre = prompt("Ingrese nombre")
}
alert ("Dato correcto")

