
/* si modifico el objeto document el html se modifica */
console.dir(document)


/* DOM= Document Object Model */

/* metodo q nos permite obtener elemento x su id
en js los html son objetos x eso const
siempre trae lo primero (objeto) su no retorna null*/

const titulo = document.getElementById("titulo")/* es un HTMLElement: objetos con cierto formato */


/* texto dentro del titulo: cambio desde java script el html */
titulo.innerText = "pepe"


const caja = document. getElementById("producto")

caja.innerText = "<h1>Tv Samsung <h1>"

/* se escribe dentro del HTML */
caja.innerHTML = "<h1>Tv Samsung <h1>"



/* asi se usa html: en js */
const producto ={
    precio: 1000,
    nombre: "tv samsung",
    descripcion: "tv 48 pulgadas"
}

/* es como si escribiera en html: lo escribo dentro de un string */
caja.innerHTML = `
    <h1>${producto.nombre}</h1>
    <p> ${producto.descripcion}</p>
    <span>Precio: $${producto.precio}</span>
    <div>
        <button>comprar</button>
    </div>
`

/* asi creamos elemento: no se usa mucho */

const buttonProduct= document.createElement("button")
buttonProduct.innerText= "comprar"
console.dir(buttonProduct)
caja. appendChild(buttonProduct)


/* generar a partir del user el html

h2 username
span password
adress input (con valor x defecto)
span email 
*/
const user ={
    username: "pepesito",
    password: "******4",
    adress: "av siempre viva",
    email: "pepe@gmail.com"
}

const box = document.getElementById("box")

box.innerHTML = `
<h2> Username: ${user.username}</h2>
<span> Password: ${user.password}</span> <br>
Adress: <input type= "text" value = '${user.adress}'> <br>
Email: <input type= "text" value ='${user.email}'> 
`







const productosContainerHTML= document.getElementById("productos-container")

const productos = [{
    precio: 1000,
    nombre: "tv samsung",
    descripcion: "tv 48 pulgadas"
},
{
    precio: 1200,
    nombre: "tv lg",
    descripcion: "tv 50 pulgadas"
},
{
    precio: 2000,
    nombre: "tv noblex",
    descripcion: "tv 60 pulgadas"
},
]

let productList = " "

for(const producto of productos){
    productList = productList + `
    <h1>${producto.nombre}</h1>
    <p> ${producto.descripcion}</p>
    <span>Precio: $${producto.precio}</span>
    <div>
        <button>comprar</button>
    </div>

    `
}

console.log(productList)

productosContainerHTML.innerHTML = productList



/* renderizar historial */
const historial = [

{
    id: "001",
    nombre: "tv samsung",
    fecha: "08/01/2020"
},
{
    id: "022",
    nombre: "Mcbook",
    fecha: "14/09/2021"
},
{
    id: "015",
    nombre: "celular motorola",
    fecha: "20/11/2023"
},
{
    id: "033",
    nombre: "zapatillas nike",
    fecha: "17/09/2022"
},

]

/* llamo al elemento x su clase: querySelector. Lo uso cuando prefiero usar clases como ID. ES MEJOR PRACTICA USAR ID.
Si tengo 2 elementos con la clase lista el querySelector se queda con el 1ero


*/
const historialHTML= document.querySelector(".historial")


let elementosHistorial = " " 

for (elemento of historial){
    elementosHistorial = elementosHistorial +
    `
    <hr>
    <div class = "historial-item">
        <span> <b> ID: #${elemento.id} </b></span>
        <h3>${elemento.nombre} </h3>
        <span> Fecha: ${elemento.fecha} </span>
        <br>
    </div>
        <hr>

    `
}

historialHTML.innerHTML= elementosHistorial

const historialItemHtml = document. getElementsByClassName ("historial-item")

/* querySelectorAll (".hisotrial-item") busca a todos los elementos x su clase= hace lo mismo q element by class name (no recomendado) */


const input = document.getElementById("input")

/* como capturo el valor del input (.value) */
console.log(input.value)


/* 
AÑADE UNA CLASE
input.classList.add("rojo") 

QUITAR CLASE
input.classList.remove("rojo")


*/



/* Hacer un iterruptor de clase 
si esta la clase la eliminamos
si no esta la agregamos

toggle

input.classList.toggle("mostrar")

input.classList.replace("mostrar, "ocultar")

para que alterne entre mostrar y no mostrar (entre clases)
if (input.classList.value.split(" ").includes("mostrar")){
    input.classList.replace("mostrar", "ocultar")
}
else{
    input.classList.replace("ocultar", "ocultar")
}

 */
