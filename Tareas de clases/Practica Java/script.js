/*                                                                  TAREAS

Escribe un condicional que verifique si una variable llamada "genero" es "hombre" o "mujer". Si es "hombre", imprime "Eres hombre" en la consola. Si es "mujer", imprime "Eres mujer" en la consola.
que el usuario realice la carga de un dato por teclado dicho dato será el lado de un cuadrado ,para luego  mostrar por pantalla el perímetro del mismo .
hacer un programa donde se ingresan cuatro números, calcular e informar la suma de los dos primeros y la multiplicación del tercero y el cuarto.
Se ingresa  un valor entero, mostrar un mensaje que indique si el número es positivo, cero o negativo.
Escribe una expresión que use el operador "&&" (and lógico) para verificar si una variable llamada "edad" es mayor o igual a 18 y si una variable llamada "tienePermiso" es "true". Si ambas condiciones se cumplen, imprime "Puedes conducir" en la consola. Si alguna de las dos condiciones no se cumple, imprime "No puedes conducir" en la consola. */


/* Ejercicio 1
Escribe un condicional que verifique si una variable llamada "tieneHijos" es "true". Si es "true", imprime "Tienes hijos" en la consola. Si es "false", imprime "No tienes hijos" en la consola.

*/


    /*Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
    datos con los cuales deben ser enviados a la función:
    esVocal('a')
    true
    esVocal('n')
    false
    esVocal('e')
    true */

/*  function esVocal  (letra){
return vocales.includes(letra)
   
} 

const vocales = ["a","e","i","o","u"]
let letra = prompt ("Ingrese una letra")
console.log(vocales.includes(letra)) */


/* 
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('¿Tienes permiso de tus padres?');
    }
  }
  
  let age = prompt('¿Qué edad tienes?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Acceso otorgado' );
  } else {
    alert( 'Acceso denegado' );
  }
 */


/*    TAREAS:


1.Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
Si no posee ninguno decir "no has ingresado una url valida */



/* let url = prompt ("Ingrese una url")

if (url.includes("https://")){
    console.log ("La url ingresada, cuenta con certificado ssl")
}
else{
    console.log("no has ingresado una url valida")
}
 */



/* 2 Dado los siguientes texto
"hola%20como%20estas,%20todo%20bien?"
"no%20me%20siento%20bien"
"que%20mal"
descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado
Averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar
"el mensaje es corto" entre 1 y 8 caracteres
"el mensaje es mediano" entre 9 y 18
"el mensaje es largo"  mas de 18
Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir
"el mensaje no es complejo" 

3.
solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
con el algoritmo anterior.*/




/* let texto = prompt("Ingrese texto")
let textoDescifrado =(texto.replaceAll("%20", " ")) 

/* function cantCaract (texto){

    
    if (textoDescifrado.length >= 1 && textoDescifrado.length <=8 ){
        console.log("El mensaje es corto")
    }
    else if (textoDescifrado.length >= 9 && textoDescifrado.length <=18){
        console.log("El mensaje es mediano")
    }
    else {
        console.log("El mensaje es largo")
    }

console.log ("El codigo descifrado es: " + textoDescifrado)
}
cantCaract()


function complejo (texto){
    if(textoDescifrado.includes(',' || " ," || '@' || '-')){
    return console.log ("El mensaje es complejo")
}
return console.log ("El mensaje NO es complejo")

}
complejo()  */

/* let texto = prompt("Ingrese texto")
let textoDescifrado =(texto.replaceAll("%20", " ")) 


function cantCaract (texto){

    
    if (textoDescifrado.length >= 1 && textoDescifrado.length <=8 ){
        console.log("El mensaje es corto")
    }
    else if (textoDescifrado.length >= 9 && textoDescifrado.length <=18){
        console.log("El mensaje es mediano")
    }
    else {
        console.log("El mensaje es largo")
    }

console.log ("El codigo descifrado es: " + textoDescifrado)

if(textoDescifrado.includes(',' || " ," || '@' || '-')){
    console.log ("El mensaje es complejo")
}
else{
    console.log ("El mensaje NO es complejo")
}    

}
cantCaract()
 */




/* 
ejercicio 4
Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
una maysucula, sino decir "tiene minuscula"
:sollozo: */

/* let palabra = prompt ("Ingrese una palabra")
function mayusculaMinuscula(){
    for (i = 0; i <= palabra.length; i = i + 1){
        if(palabra.indexOf(palabra.charAt(i))!=-1){
            return console.log ("el texto tiene minusculas")
        }
    }
    
    return console.log ("el texto no tiene minusculas")
        }
    
mayusculaMinuscula()
 */




let palabra = prompt("Ingrese una palabra")

function tieneMayusculaMinuscula (palabra){
const abc = /[A-Z]/
const mayuscMinusc = abc.test(palabra)
if(mayuscMinusc){
    console.log("Tiene mayuscula")
}
else{
    console.log("Tiene minuscula")
}

}
tieneMayusculaMinuscula(palabra)


/*  15:18
        28)Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
        Ingresá la distancia del recorrido
        Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
        Las velocidades de los medio de transporte son:
        a pie : 5 km/ hs
        bicicleta : 10 km/ hs
        auto : 50 km/hs
 */        

    /*  let recorrido = prompt ("Ingresa el recorrido")
        while  (!recorrido || isNaN(recorrido)){
            recorrido= prompt("ERROR : Debe ingresar el recorrido")
        }
        function tiempoDeRecorrido (distancia){
            
            let resultadoAPie = distancia/5

            let resultadoEnBicicleta = distancia/10

            let resultadoEnAuto = distancia/50
            
            return console.log ("Para la distancia " + distancia + " km , el tiempo de viaje en bicicleta es " + resultadoEnBicicleta +  " hora/s, a pie " + resultadoAPie + " hora/s y en auto " + resultadoEnAuto + " hora/s")
            
        }

        tiempoDeRecorrido(recorrido) */


/* 
29)Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
datos con los cuales deben ser enviados a la función
puedeVerPelicula(12, false)
false
 puedeVerPelicula(12, true)
true
 puedeVerPelicula(16, false)
true
 puedeVerPelicula(18, true)
true*/

/* let edad 
let autorizacion 

function puedeVerPelicula (edad, autorizacion){
    if (edad >= 15 || autorizacion === true){
    return console.log (true)
    }

    return console.log (false)

}

puedeVerPelicula(12, false)
puedeVerPelicula(12, true)
puedeVerPelicula(16, false)
puedeVerPelicula(18, true)
puedeVerPelicula (10, false) */


