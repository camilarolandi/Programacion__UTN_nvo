function validarEmail (email) {
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