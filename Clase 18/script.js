/* join: unificar elementos de un array a traves de un string 

push: (.push) añade uno o más elementos al final de un array y devuelve la nueva longitud del array.


local storage: como una base de datos. tabla q permite trabajar con la persistencia de datos(depende del navegaador)
session storage: depende de la sesion q este abierta

para acceder: con var globales ya vienen declaradas no debo crearlas

metodos: (funcionan para session y local)
-setItem: recibe key (string) y value (string) y guarda en nva fila o reemplaza el key y el value. SOLO GUARDA STRING
-getItem: obetener el valor de una key: le paso la key
-removeItem: eliminar key y el valor.
-clear: para borrar cuando pruebo

JSON: Manipular objetos
tipo de archivos q se escribe como un objeto de java script
JSON.parse() = transforma a objeto
JSON.stringfy() = transforma a string

si quiero un string: comillas ""

si quiero array []
si quiero objeto {}
objeto o array: la ultima coma no va
"nombre": "pepe",
"edad": 70
(luego del 70 no coma)
si quiero nros, underfine, null
*/






/* const historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
]





function renderizarHistorial(){
let listaHistorial = " "
for (item of historial){
    listaHistorial = listaHistorial + `
    Accion: ${item.accion}
    Operacion :${item.operacion}
    Numeros: ${item.a}, ${item.b}
    Resultado: ${item.resultado}
    `
} 
return historial
} */



function agregarAlHistorial(elementoHistorial){
const historial = obtenerHistorial()
historial.push(elementoHistorial)
const historialEnString = JSON.stringify(historial)
localStorage.setItem("Historial", historialEnString)

}

function obtenerHistorial(){
    let historialString = localStorage.getItem("Historial");
    return JSON.parse(historialString)
    
} 



if (obtenerHistorial() === null){
    localStorage.setItem('Historial', JSON.stringify([]))
} 

/* Si la fn retorna null es xq el array estaba vacio, con esto me aseguro q  el usuario siempre tenga un hisotorial aunquesea vacio  */



let elementoParaHistorial= {
    accion: 'CALCULAR',
    operacion: '+',
    a: 1,
    b: 2,
    resultado: 2
}

agregarAlHistorial(elementoParaHistorial) 



/* console.log (renderizarHistorial(historial)) */


/* let datoImportante = "El mate se toma Dulce"

localStorage.setItem("Importante", datoImportante)
localStorage.setItem("Array", {})
localStorage.getItem("Importante")
localStorage.removeItem("Array")
localStorage.clear()  */

/* let string = '{"username":" pepe"}'
let stringComboObjeto = JSON.parse(string)
console.log(stringComboObjeto) */


/* let objeto={
    nombre: "pepe",
    edad: 20
}

let objetoEnString = JSON.stringify(objeto)
 */


/* TAREA: Transformar el array hsitorial en string con json con alerta

como se si funciona?? alerta no mostrar [objet:objet]
*/



/* TAREA:
en la fn de agragar al hisotrial hago el push y guardo el historial en local storage con key historial

fn obtener historial
tomar el historial del local storage y retornarlo como ARRAY
*/


