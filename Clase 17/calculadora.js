
function validarEmail(){
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email)
}

function validarPassword(){
    return (Boolean(password) && password.length > 6 && password != password.toLowerCase())
}



function obtenerDato(data){
let dato = prompt (data.mensaje)
while (!data.validacion(dato)){
    alert (data.error)
}

return dato

}


const DATOS ={

EMAIL :{
        mensaje: "Ingrese su e-mail" ,
        error: "ERROR: No se ingreso un e-mail valido, reintente",
        validacion: validarEmail
    },

    PASSWORD:{
        mensaje: "Ingrese su contraseña" ,
        error: "ERROR: No se ingreso una contraseña valida, reintente",
        validacion: validarPassword
    }
}



function login(){
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return {email: email, password: password}
}


login()


