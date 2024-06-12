const formLoginHTML = document.getElementById ("form-login")


/* recibe un evento (event, even, e) funcion q recibe la info del evento, es una callback. submit desencadena la funcion y esa fn recibe un objeto llamado evento la fn "atrapa" la info del evento*/





const validarMayuscula =(password)=>{
    let textoMinuscula = /[A-Z]/.test(password)
    return (textoMinuscula != password)
}


const VALIDACIONES ={
    email:{
        validacion: (email) => (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email) ,
        error: "el email es incorrecto" 
    },

    password:{
        validacion: (password) => (password && validarMayuscula(password) && password.includes("#")) ,
        error:"la contrasña es incorrecta",

    },


    username:{
        validacion: (username) => username && username.length < 4 && password.includes("-") && validarMayuscula(username),
        error: "el usuario es incorrecto",
    }

}


























/* const handleLogin = (event)=>{
    event.preventDefault()
    console.log("Se envio el fomulario")
    const formulario = event.target
    const username = formulario.username.value
    const password = formulario.password.value
    const email = formulario.email.value
    
    if(username.length < 4 && username != username.toLowerCase() && username != username.includes("-")){
        const errorUserHTML = document.getElementById("error-texto-username")
        errorUserHTML.innerText = "el username debe tener 4 caracteres y una mayuscula"
        /* errorText.style.color= "red" */
    /* } */

    /* if(password != password.toLowerCase() && password != password.includes("#")){ */
    /*     const errorPassHTML = document.getElementById("error-texto-password") */
    /*     errorPassHTML.innerText = "la password debe tener una mayuscula y un #"    */
    /* } */
    /*  */
    /* if(email != (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email)){ */
    /*     const errorEmailHTML = document.getElementById("error-texto-email") */
    /*     errorEmailHTML.innerText = "la password debe tener una mayuscula y un #"    */
    /* } 

}*/


/* LoginHTML.addEventListener("submit", handleLogin) */ 





























/* TAREAS 
USERNAME: 1 MAYUSCULA Y UN GUION Y AL MENOS 4 CARACTERES
PASSWORD: 1 MAYUSCULA Y UN #
EMAIL: DEBE SER EMAIL

SI EL ERROR ES MULTIPLE, DOS TEXTOS DE ERROR CADA INPUT CON SU POSIBILIDAD DE FALLAR


*/


/* console.log(formLoginHTML.username.value) */



/* VALIDACION DE EMAIL
return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email) */


/* name del input= lo uso para poder obtener el valor del input (es en este caso username) x defecto no pongo value. Los formularios recargan por defecto y queremos evitar eso
*/

/* TRABAJAR SIN LA VARIABLE: USO DIRECTO EL EVENTO: lo que quiero es obtener el formulario del que se desencadeno el submit
target: De donde salio el evento submit 

ambos son iguales (la variable es reemplazable por evento.target)
console.dir(event.target)
console.dir(formLoginHTML)
EN REACT NUNCA LLAMO AL FORMULARIO
*/