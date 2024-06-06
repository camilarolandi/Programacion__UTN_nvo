

/* EVENTOS
todos los eventos comienzan con on
*/

function alertar (){
    alert("Hola desde un evento click")
}

const btnClick2 =  document.getElementById("btn-especial")

/* asigno la referencia de la funcion como poner la fn en si misma */
/* btnClick2.onclick = alertar */


/* como la voy a usar 1 vez la escribo asi */

btnClick2.onclick = function (){
    alert("Hola desde un evento click")
} 


/* fn flceha */
const sumar = (a, b)=> alert(sumar(8,8))


/* querySelector= devuelve un objeto */
const btn = document.getElementById("btn")

/* get element byclassname = retorna una coleccion, tipo de objeto especial con formato similar al de un array pero no lo es */

/* querySelectorAll = busca todas las clases iguales (espero q este buscando una coleccion) devuelve tipos de array q son objetos*/
/* const boton = documet.querySelectorAll("btn")[0] */

/* MAS CORRECTOS: querySelector y ID */

/* ADD EVENT LISTENER: Metodo para añedir eventos */
/* btn.addEventListener('click', function(){
    console.log("click")
}) */


btn.addEventListener("click", () => {
    console.log ("hola")
})

/* key down: presiono la tecla
key up: cuando se levanta
key press: cuando ya no se toca */


/* function hacerTarea (){

    let tipo = prompt('que tipo de tarea quieres hacer')

    guardarTarea(tipo)

    return tipo


const hacerTarea = () => {

    let tipo = prompt('¿Qué tipo de tarea quieres hacer?');

    guardarTarea(tipo);

    return tipo;

};







const solicitarDato(solicitud) => {
let dato= prompt ("ingrese un " + solicitud)
while (!dato){
    dato= prompt ("ingrese" + solicitud)
}
return dato
}

 




LA FLECHA REEMPLAZA FUNCTION
    const calcularIva = (monto) => monto* 0.21

}

funcion calcularIva (iva){

    return iva * 0.21

} */




const personas=[
{
    nombre: "juan",
    edad:30
},
{
    nombre: "maria",
    edad: 19
},
{
    nombre: "pedro" ,
    edad: 13
}

]

/* asi hago la fn */
const mayorDeEdad = personas.filter((persona => persona.edad >=18))

console.log(mayorDeEdad)


/* capturar dato de un input 
fn q paso al addEvent... handle (fn q se activa cuando se haga el evento submit)
handle lo uso con cualquier tipo de evento
*/


/* 
igual q crean fn por fuera
formularioHTML.addEventListener("submit", ()=>{

} ) */

const formularioHTML = document.getElementById("formulario") /* guardado como un objeto */

evento.preventDefault()
    const handleSubmit= (evento)=> {
    evento.preventDefault() /* para prevenir el comportamiento x defecto */
    console.dir(formularioHTML.dato.value)
}

/* .dato xq dato es el name del input. .value para acceder al valor del input */
formularioHTML.addEventListener("submit", handleSubmit)

/* el evento siempre existe, trae metadatos del evento en si mismo, como el historial, lo q se registro. NO lo creamos nosotros 
importante: propiedad target= de donde se hizo el evento. ejempplo cuando doy favorito a un elemento, quiero saber especificamente de donde.

*/


