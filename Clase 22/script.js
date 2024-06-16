/* pila de llamadas: CALLSTACK
(ASINCRONICA)
el primero en entrar es el ultimo en salir
es como poner platos el primero q pongo es el ultimo q saco


console.log("hola")

console.log("chau")

prompt(alert())

primero se ejecuta alert y desp prompt

*/


/* FETCH: Funcion ASINCRONICA (es quien envia la consulta)
CONSULTA HTTP
*/

/* CONSULTA HTTP
internet se basa en esas consultas: es una forma de transferir info: protocolo de transerencia
*/


/* promesa: fetch devuelve una promise. tiene una serie de arreglos
3estados posibles
pending
    resolved
    rejeted

carga asincronica: se resuelve cualquiera 1ero
await: aguardar
api json placeholder: devuelve json

metodo que devuleve promesa= fn asincronica
json: fn asincronica
*/
/* async: antes del parametro */



/* const obtenerUsuario = async () =>{
    const URL_API = "https://jsonplaceholder.typicode.com"

const response = await fetch(URL_API + '/users',{
    method: "GET",
})
const data = await response.json()
console.log (data)
console.log(response)
console.log("es la Respuesta", response)
}

obtenerUsuario()
 */

/* const URL_API = "https://jsonplaceholder.typicode.com/users/1"
const boxHTML = document.getElementById("box")
const obtenerUsuario = async () =>{

const response = await fetch(URL_API + '/users',{
    method: "GET",
})

const data = await response.json()


boxHTML.innerHTML= `
<h2> ${data.username} </h2>
<span> Phone: ${data.phone} </span>
<span> Email: ${data.email}</span>
`

console.log (data)
console.log("es la Respuesta", response)
}

obtenerUsuario() */




/* const obtenerUsuarioPorID = async(id)=>{
    const URL_API = "https://jsonplaceholder.typicode.com/users/1"
    const userInfoHTML = document.getElementById("userinfo")
    userInfoHTML.innerHTML = "<h2>Cargando...</h2>"
    const response = await fetch(URL_API + "/users/"+ id,{
        method: "GET",
    })
    const user =await response.json()
    renderizarUsuario(user)
}


    const renderizarUsuario = (user)=>{
    const userInfoHTML = document.getElementById("userinfo")
    userInfoHTML.innerHTML= `
<h2> ${user.name} </h2>
<span> Phone: ${user.phone} </span>
<span> Email: ${user.email}</span>
`
} */



/* usuario en particular 
si me de undefined hacer console log del user
mostrar en html, en un div
h2: {user.name}
span: phone: {user.phone}
span: email: {user.email}
*/





/* const obtenerPost = async () =>{
    const URL_API = "https://jsonplaceholder.typicode.com"

const response = await fetch(URL_API + '/posts',{
    method: "GET",
})
console.log(response)
console.log("es la Respuesta", response)
}
 */



/* obtenerPost() */



const obtenerUsuarioPorID = async(id)=>{
    const URL_API = "https://jsonplaceholder.typicode.com/users/1"
    const userInfoHTML = document.getElementById("userinfo")
    userInfoHTML.innerHTML = "<h2>Cargando...</h2>"
    const response = await fetch(URL_API + '/users' + id,{
        method: "GET",
    })
    const user = await response.json()
    console.log(user)
    
    userInfoHTML.innerHTML= `
    <h2> ${user.name} </h2>
    <span> Phone: ${user.phone} </span>
    <br>
    <span> Email: ${user.email}</span>
    `
}

obtenerUsuarioPorID(1)