/* FUNCIONES NATIVAS (ya incorporada en javascript)

isnan: recibe un dato y devuevle un booleano que devuelve si es o no un numero. (true: es NaN, False: NO es NaN)

alert: recibe un string y lo muestra en un pop up de la pagina (no retorna nada x eso devuelve undefined)
 alert(hola)
 alert(9)= lo transforma y me muetsra el formato string 

typeof= le damos un dato y nos dice que tipo de dato es

prompt: interaccion con el usuario
lo q me devuelve el usuario lo puedo almacenar en una variable
recibe un mje y devuelkve el valor ingresado x el usuario: null si se presiona cancelar o un string

parseint()transforma a un valor numerico y lo trunca
parsefloat() funciones genericas. dado un dato lo transforma a su valor numerico y si no se puede transformar devuelve NaN
number() para saber cambio de valores

*/

/* 
IF
 if (condition){
    bloque de codigo
 }
 else 
 {

 }


 cuando voy a validar pienso en los posibles datos erroneos: 
 
 ejemplo:dato no debe ser null o "". armo condicion




*/
/* 
let edad = prompt ("Ingrese su edad")

if (edad >= 18){
    alert ("Podes pasar")

}
  else{
    alert ("NO podes pasar")
  } */


  /* Caso no mejorado
  
  let dato = prompt ("Ingrese un dato")
  if (dato === null || dato === " ") usar el estrictamente igual para condiciones. null y "" son falsy {
    alert("ERROR: Dato no valido")
  }
  else{
    alert("Todo es correcto")
  } 
  falsey: valores falsos sin ser necesariamente false. valores que al transformarlos en booleanos son falsos.
  
  */

 /* caso mejorado */
  /* let dato = prompt ("Ingrese un dato")
  
  if (!dato){ si no hay dato. el if mira si es truly or falsey en funcion a eso se ejecuta o no, se eejecuta si es truly. Si niego un falsy se transforma en true y al reves. ME DA EL VALOR BOOLEANO OPUESTO 
    alert("ERROR: Dato no valido")
  }
  else{
    alert("Todo es correcto")} */




/* let variable= alert("")
alert ("el valor de retorno de alert es: " + variable) */



/* let dato= prompt("Ingrese su edad")
dato= Number(dato) /* me convierte el string en nro */
/* alert("el valor ingresado es: " + dato)
alert(typeof dato) */








/* elsy con rangos 
let puntos = prompt ("Ingresa tus puntos")
if(puntos>= 0 && puntos<=1000){
  alert ("Principiante")}

  else if(puntos> 1000 && puntos<=3000){
    alert ("Avanzado")
  }
  else if( puntos>3000){
    alert("Experimentado")
  }
  */

/* SALARIO */

/* let salario = prompt ("Ingrese su salario mensual")
salario= Number(salario)
alert ("Su salario anual es: $ " + salario * 12 ) */

/* HIJOS */

/* let tienehijos= prompt("¿Tiene hijos?") */

/* EDAD  */

/*let edad = prompt ("Ingrese su edad")

if (edad >= 18){
  console.log ("Eres mayor de edad")

}
else{
  alert("Eres menor de edad")
} */

/* HIJOS */

/* let tienehijos= prompt("¿Tiene hijos?")

  if (tienehijos ==="Si"){
    alert("True")
  }
    else{
    alert("False")} */
  



/* Sueldo y antiguedad */

/* let sueldo = prompt ("Ingrese su salario")
if (!sueldo){
console.error ("No es valido")

}
let antiguedad = prompt ("Ingrese su antiguedad")

Number(sueldo)
if(sueldo<500 && antiguedad>=10){
  alert("Corresponde un aumento del 20%")
  alert("Su salario total es: $ " + sueldo* 1.20)
}
else if (sueldo < 500 && antiguedad<10){
  alert("Corresponde un aumento del 5%")
  alert("Su salario total es: $ " + sueldo* 1.05)
}
else if (sueldo >= 500){
  
  alert("Su salario es: " + sueldo)
}
 */

/* HIJOS= CORRECTO */
/* let tienehijos= true
alert(tienehijos) */
