/* cuando una funcion retorna un booleano poner esVocal xej */

/* recorrer un array uso bucle for: xq quiero que se repita algo en funcion a la cantidad de elementos que tengo
uso la abreviacion index (POSICION)


TODOS LOS METODOS RECORREN DE ARRIBA HACIA ABAJO
*/


/* siempre misma estructura del for */
/* const nombres = ["pepe" , "juan", "maria"]

for (let index= 0; index < nombres.length; index = index + 1){
    let nombre = nombres[index]
    console.log ("Hola " + nombre) 
}
 */


/*                         ARRAY DE OBJETOS */
/* const carrito = [
    {
        nombre: "Tv samsung",
        precio: 300,
        cantidad: 3
    },
    {
        nombre: "Patineta",
        precio: 200,
        cantidad: 1
    },
]

for (let index= 0; index < carrito.length; index = index + 1){
    const producto = carrito[index]


console.log ("Has comprdo el producto " + producto.nombre + "x" + producto.cantidad + " a un precio unitario de:  $ " + producto.precio)  
}

 */


/* let sumaEdades = 0
const personajes = [
    {
        nombre: "pepe",
        apellido: "suarez",
        edad: 40
    },

    {
        nombre: "juan",
        apellido: "gomez",
        edad: 50
    },

    {
        nombre: "ezequiel",
        apellido: "rodriguez",
        edad: 34
    }
]



for (let index= 0; index < personajes.length; index = index + 1){
    const personaje = personajes[index]
    
    console.log ("Hola mi nombre es " + personaje.nombre + " "+ personaje.apellido + " y tengo " + personaje.edad + " años") 
    
    sumaEdades = sumaEdades + personaje.edad
    
}

console.log("La sumatoria de edades es: " + sumaEdades) */


/* 
FOR OF
Si quiero recorrer un array es mas eficiente usar for ... of ...
es mucho mas sencillo de escribir.USAR CUANDO QUIERO RECORRER TODO EL ARRAY.

Array de string= let
Array de objetos = const
FUNCIONA IGUAL!!
*/

/* let sumaEdades = 0
const personajes = [
    {
        nombre: "pepe",
        apellido: "suarez",
        edad: 40
    },

    {
        nombre: "juan",
        apellido: "gomez",
        edad: 50
    },

    {
        nombre: "ezequiel",
        apellido: "rodriguez",
        edad: 34
    }
]

for (const personaje of personajes){
    console.log ("Hola mi nombre es " + personaje.nombre + " "+ personaje.apellido + " y tengo " + personaje.edad + " años") 
    sumaEdades = sumaEdades + personaje.edad
}

console.log("La sumatoria de edades es: " + sumaEdades) */





/* FOR IN: Muestra las propiedades (keys) del objeto */

/* const datos = {
    nombre: "pepe",
    apellido: "suarez",
    dni: "12345678"
}


let resultado = ""
for (let propiedad in datos){
    resultado= resultado + "\n " + propiedad + ": " + datos[propiedad]
    console.log(resultado)
} */



/*                  METODOS AVANZADOS DE ARRAY

    metodo que recibe una call back
    call back: fn pasada x parametros, no la llamo, literalmente la declaro
*/

/* FOR EACH (forEach)
Por cada elemento (each) hago una accion 
recibe una fn anonima que recibe x parametro el elemento de mi array.
despues puedo mostrar x consola personaje.edad: muestra la edad (un elemento especifico del array)
*/


/* const personajes = [
    {
        nombre: "pepe",
        apellido: "suarez",
        edad: 40
    },

    {
        nombre: "juan",
        apellido: "gomez",
        edad: 50
    },

    {
        nombre: "ezequiel",
        apellido: "rodriguez",
        edad: 14
    }
] */

/* personajes.forEach(function(personaje){
    console.log(personaje.edad)
}) */


/*                              FILTER
filter: recibe una fn (anonima (no tiene nombre): normalmente se hace eso)
la callback recibe al elemento
filter retorna un array con los personajes que cumplan la condicion

si el valor de la callback es thurty, el elemento se agregara al array resultante 

si el valor de retorno de la callback es falsey, el elemento se ignorara y se pasara al siguiente elemento.

SIEMPRE FILTER RETORNARA UN ARRAY!!!

Si el array es vacio: ningun elemento paso el filtro, son todos falsey.
*/


/* const personajesMayoresdeEdad = personajes.filter(function(personaje){
    return (personaje.edad >=18)
})

console.log(personajesMayoresdeEdad) */


/* Tarea: Filter
-traer los productos de un precio menor a 2950
-traer productos de marca noblex
-traer prodcutos que en su nombre incluyan (includes) string tv 

Uso el .toLowerCase xq normalmente es un dato q ingresa el usuario y puede tener mezclados mayusculas y minusculas.

*/

/* const productos = [
    {
    nombre: "Tv samsung",
    marca: "samsung",
    id: 1,
    precio: 3000
},
{
    nombre: "celu samsung",
    marca: "samsung",
    id: 1,
    precio: 1100
},
{
    nombre: "Tv LG",
    marca: "LG",
    id: 3,
    precio: 2900
},

{
    nombre: "Tv Noblex",
    marca: "noblex",
    id: 3,
    precio: 1500
},
{
    nombre: "compu Noblex",
    marca: "noblex",
    id: 3,
    precio: 3500
}
]

const productosPrecio = productos.filter(function(producto){
    return (producto.precio < 2950)
})

console.log(productosPrecio)

const productosMarca = productos.filter(function(producto){
    return (producto.marca.toLowerCase() === "noblex".toLowerCase())
})

console.log(productosMarca)

const productosIncluyenTv = productos.filter(function(producto){
    return (producto.nombre.toLowerCase().includes("Tv".toLowerCase()) )
})
console.log(productosIncluyenTv) */



/*                      FIND
BUSQUEDA (busqueda puntual)
cuando la callback: verdadero se termina el find y devuelve el elemento si hay mas de un pepe devuelve el primero 

array de objetos
*/

/*const personajes = [
    {
        nombre: "pepe",
        apellido: "suarez",
        edad: 40
    },

    {
        nombre: "juan",
        apellido: "gomez",
        edad: 50
    },

    {
        nombre: "ezequiel",
        apellido: "rodriguez",
        edad: 14
    }
]

const pepe = personajes.find(function(personaje){
    return personaje.nombre === "pepe"
    
})

for (const personaje of personajes){
    console.log(personaje)
}

personajes. forEach(function(personaje){
    console.log(personaje)

}) */


/* reemplazo de filter con for of */

/* const personajesMayores = []
for(const personaje of personajes){
    if (personaje.edad >= 18){
        personajesMayores.push(personaje)

    }
}

console.log(personajesMayores) */


/*                  MAP
-(nombrevariable).map
Sirve para crear un array en base a otro array
siempre retorna un array.
filter: a traves de un array original crea otro descartando elementos.


va a retornar el array y pie cada elemento la callback se ejecuta

la misma cantidad del array original
*/


const objetos =[
    {
        nombre: "vaso",
    },

    {
        nombre: "tornillos",
    },

    {
        nombre: "compu",
    }
]


const listaDeObjetos = objetos.map (function(objeto){
    return "<div>" + objeto.nombre +  "</div>"
})
console.log (listaDeObjetos)

const resultado = objetos.map (function (objeto){
    return ("pepe")
})
console.log (resultado)

const producto = objetos.map (function(objeto){
    return "el producto elegido es: " + objeto.nombre 
})
console.log (producto)