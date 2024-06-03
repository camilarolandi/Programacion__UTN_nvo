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