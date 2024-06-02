/* operadores logicos */

/* not: ! nos da el el valor booleano opiesto al dato que estoy negando. ""= falsy 

OR: P/ selecionar ||
Analiza de izquierda a derecha
si el primer valor es falsy, selecciona el 2d0 independientemente si es falso o verdadero
si el primer valor es verdadero, selecciona el 1ero



Tablas de verdad
si el 1ero es falso, devuelve el 2do
si el primero es verdaadero, devuelve el primero
    true||true= true
    true||false= true
    false||true= true
    false||false= false


AND o Y logico: && (&= shitf+6)
evalua si el primer valor es true or false
    si es true: devuelve el 2do valor.

    si es false: devuelve el primer valor.

    NaN no es igual a ningun otro dato y por mas que ponga NaN=NaN va a ser false: siempre que haya un NaN es falso. es tipo numero.

    Tablas de verdad
    AND
    Evalua el 1ero:  si es verdadero devuelve el 2do, si es falso devuelve el 1ero.
    true&&true= true
    true&&false= false
    false&&true= falso
    false&&false= falso
*/



/* Variable: espacio reservado que almacena un dato 
EcmaScript: define las versiones. ente regulador, al ser de codigo abierto las modificaciones de los usuarios son recepcionadas por ecmascript y si son aprobadas se implementas

2 grandes versiones
ecmascript6 (ES6) desde 2015 USAR Let
ecmascript5 (ES5) mas antigua usa el Var

SINTAXIS: tipo de var (var, let, const), identificador (nombre de la variable), dato.

VAR
Siempre tiene alcance global No importa que declare una variable dentro de otro ambito
tiene hoisting? puedo llamar a la variable antes de la declaracion? declaracion: es cuando creo la variable. VAR= tiene hoisting, afecta  a la declaracion de la variable, si no le asigno valor por defecto es undefined, si declaro antes "lleva" la declaracion arriba del llamdo a la variable y devuelve undefined NO devuelve error.
se puede reasignar? SI. Redeclaracion dos var con el mismo nombre toma la ultima
valor implicito en undefined? SI
se puede redeclarar? SI



LET 
USAR ESTO PARA ESCRIBIR CODIGO.

tiene hoisting? NO. Error si la llamo antes de declararla
error:
console.log(nombre)
let nombre ="maria"
No permite llamar a una variable antes de crearla

Correcto:
let nombre ="maria"
console.log(nombre)

lee desde lo primero a lo ultimo tipo "cascada"

se puede reasignar? si
valor implicito en undefined? si
se puede redeclarar? NO en el mismo . SI se peude si el bloque es distinto.
BLOQUE DE CODIGO CUANDO PONGO LLAVES

let nombre = "pepe" (variable global)

{
    alcance local
    let nombre= "juan"
    nombre= "julieta"
}

CONST
Valor constante.
tiene hoisting? NO
se puede reasignar? NO
se puede redeclarar? si pero en distitnos bloques
valor implicito en undefined? NO 
Se puede redeclarar

*/

