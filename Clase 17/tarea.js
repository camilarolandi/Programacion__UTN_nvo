/* CALCULADORA
-tener soporte para las sig operacion: +, -
    -'+'
    -'-'

operacionesValidas = ['+', '-']

Solicitar una operacion:
La operacion es valida si es alguna de las operaciones validas 
Vamos a solicitar un numero 1: 
Validar que sea un numero
Vamos a solcitar un numero 2:
validar que sea un numero


En caso de elegir una '+'
Aca sumamos
Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}

En caso de elegir una '-'
Aca restamos
Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}

funcionalidad (SIEMPRE EN BUCLE)
- historial
-crear usuario (al entrar a la calculadora). e-mail

utilidades de la calculadora

-validacion = 
solo suma o resta (no otra operacion)
(validar string "+" y "-")
validacion de e-mail
opcion cancelar paraa volver atras

por ahora
INGRESO DE DATOS: prompt
EGRESO DE DATOS: alert

segmentos a desarrollar: (organizado)
calculadora

historial (por alert)

login (comienzo por aca)

*/

/* LOGIN

prompt q solicita al usuario un email
validar q el email sea un email (RegEx. link: https://regexr.com/3e48o) expresion regular
expresion: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ y agrego .test(variableemailaverificar) devuelve un booleano
test: ya tiene incluida la validacion  comillas vacias o nulo 
prompt q solicita el email es parte del login xeso lo pongo dentro de la funcion

*/

/* VALIDAR MAYUSCULA
function validarPassword(password){
    return (password.lenght> 6 && password != password.toLowerCase [] && boolean (password))
}
*/


function login(){
    let email = prompt ("Ingrese su e-mail")
    while (! (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email)){
        alert ("Error: No se ingreso un e-mail válido")
        email= prompt ("Ingrese un e-mail valido")
    } 
alert ("El email ingresado es: " + email)

let password = prompt ("Ingrese su contraseña")
const mayuscula = /[A-Z]/
while (!password && password.length < 6 && !mayuscula.test(password)){
        alert ("Error: No se ingreso una contraseña válida")
        password = prompt ("Ingrese una contraseña valida")
}
return (email,password)

}
let mailregistrado = login() 

/* let may = prompt ("ingrese letra")
const mayuscula = /[A-Z]/
console.log (mayuscula.test(may)) */


/*  */