/* ARRAY []
de fondo es un objeto
lista de elementos ordenadas
ejemplos:
-meses
-productos
-notas de alumnos
-usuarios

Se usa para listar y tiene un orden ejemplo 9=nota 1er trim, 10 nota 2do trim, 6 nota 3er trim


como accedo? conociendo la posicion, como la conozco? 
array cuenta posiciones desde el 0 (indice/ index)

console.log ("En el segundo trimestre te sacaste un: " + notaTrimestre [1]) p/ mostrar

let notaTrimestre = [9, 10, 6]
                    0   1   2


array formato objeto

const notas={
    0: 9;
    1: 10;
    2: 6;
    length:3
}

cambiar el valor= 
notaTrimestre[1]=9


propiedad de los array (y string) LENGHT= Cantidad de elementos de un array y se cuenta desde 1
*/



/* let notaTrimestre = [9, 10, 6]

notaTrimestre[1] = 4

console.log ("En el segundo trimestre te sacaste un: " + notaTrimestre [1])  */



/* MALAS PRACTICAS 

eliminar al ultimo elemento 
delete.nombre [5] MALA PRACTICA
nombre [7]= "ezequiel" MALA PRACTICA

*/

/*  METODOS DE LOS ARRAY
variable.pop = Elimina el ultimo elemento
variable.shift =Elimina el primer elemento

let eliminado= nombres.shift(). almaceno en una variable lo eliminado y lo muestro por conosola se ve pepe. SE USA PARA EL REHACER, EL VALOR Q RETORNA SHIFT O POP. Son metodos modifican el array ORIGINAL.

toUpperCase= NO mutable
nombre= nombre. toUpperCase() --- cambia a MAYUSCULA


para agregar
nombres.push()= AGREGA AL FINAL. Metodo mutable (SE USA)
nombres.unshift()= AGREGA  AL PRINCIPIO


cambiar el nombre
nombres [2] = "marianela" (NO SE USA)
SI SE USA
nombres.indexOF("maria")= posicion (si existe)/ -1 (si no existe) SOLO PARA ARRAY CON STRING


splice (posicion, cuantos elementos elimino, nuevo elemento)


*/

/* nombres.pop() */
/* 
let eliminado = nombres.shift()
 */

/* let nombre= "pepe"
nombre= nombre. toUpperCase() 
console.log(nombre) */

/* let posicion = nombres.indexof ("maria")

nombres[posicion] = "marianela" */

/* let posicion = nombres.indexOf("valentina")
nombres.splice(posicion,1, "jose")
console.log(nombres) */



/* elimino a juan y maria: */

/* Lo hago asi porq conozco el array */

/* let posicion = nombres. indexOf ("juan"). NO USAR EL &&
nombres.splice(posicion,2)
console.log(nombres) 
*/


/* NO SE EN QUE POSICION ESTA EL NOMBRE, DEBERIA HACERLO SIN VER EL ARRAY */
/* const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
]
nombres.splice(nombres.indexOf('juan'),1)
nombres.splice(nombres.indexOf('maria'),1) 
 */





/* 

ESTA BIEN (VER)

const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
]
function eliminarNombre(nombre){
    const posicion = nombres.indexOf(nombre)
    nombres.splice(posicion, 1)
}
eliminarNombre('maria')
eliminarNombre('juan')
console.log(nombres) */


const nombres = [
    "pepe",
    "juan" ,
    "maria",
    "pedro",
    "valentina",
    "alex"
]


nombres.splice(nombres.indexOf("maria"),0, "carlos", "jose")

console.log(nombres)