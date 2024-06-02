/* function validarEmail (email) {
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))
}
function validarPassword (password) {
    return (Boolean(password) && password.length > 6 && /[A-Z]/.test (password) )
}


function obtenerDato (data){

    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
    }
    return dato
}


const DATOS = {
    EMAIL: {
        mensaje: "Ingrese su email: ",
        error: "ERROR: Ingrese un email valido: ",
        validacion: validarEmail
    },
    PASSWORD: {
        mensaje: "Ingrese su contraseña: ",
        error: "ERROR: Ingrese una contrasena valida: ", 
        validacion: validarPassword
    }
}


function login() {
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return { email: email, password: password}
}
let email = obtenerDato(DATOS.EMAIL)
let password = obtenerDato(DATOS.PASSWORD)
 */







/* function calculadora(a,b){
    let operacion = prompt ("Ingrese la operacion a realizar")
    if (operacion === "Suma".toLowerCase() || operacion === "Resta".toLowerCase()){
        let numero = prompt ("Ingrese numeros")
        if (operacion==="suma".toLowerCase()){
            return (a+b)}
            else if (operacion === "resta".toLowerCase()){
                return (a-b)
            }
            else{
                numero = prompt ("ingrese nro valido")
            }
            }

        } */




       
        /* while  (!cantalumn || isNaN(cantalumn)){
            cantalumn= prompt("ERROR : Debe ingresar la cantidad de alumnos") */ 



    function validarNumeros(numero){
        return (!numero || isNan (numero))
    }

    function validarOperacion(){
    return ("suma".toLowerCase() || "resta".toLowerCase())
    }


    function suma (a,b){
    let resultado = Number(a) + Number(b)
    return resultado
}


function resta (a,b){
    let resultado = Number(a) - Number(b)
    return resultado
}




function obtenerNumeros (num){
let dato = prompt(num.mensaje)
while(num.validacion(dato)){
    dato= prompt (num.error)
}
return dato
}


const OPERNROS={
    OPERACIONES:{
        mensaje: "Ingrese la operacion a realizar (las operaciones admitidas son Suma y Resta",
        error: "ERROR: La operacion ingresada es incorrecta. Ingrese una operacion admitida",
        validacion: validarOperacion
    },

    NUMEROS:{
        mensaje: "Ingrese la operacion a realizar (las operaciones admitidas son Suma y Resta" ,
        error:"ERROR: La operacion ingresada es incorrecta. Ingrese una operacion admitida",
        validacion: validarNumeros
    }
}


function operaciones(){
let num1= OPERNROS.NUMEROS
let num2= OPERNROS.NUMEROS
let operacion = OPERNROS.OPERACIONES
if (operacion === "Suma".toLowerCase()){

    let resultado = suma (num1,num2)
    alert ("El resultado de la suma es: " + resultado)
}
    else if (operacion === "Resta".toLowerCase()){
        let resultado = resta (num1,num2)
        alert("El resultado de la resta es: " + resultado)
    }
        
    }


operaciones()

