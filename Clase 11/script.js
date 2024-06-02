
/* RESPETAR SIEMPRE MAYUSCULAS Y MINUSCULAS */


/* puedo llamar al .js de cualquier forma */

/* tipos de datos */
/* datos: unidad con la que se escrible la info */

/* Datos primitivos y objetos(proximamente)
PRIMITIVOS: 
-NUMBER (Numeros comunes, no existe el concepto de decimal ej:3,14 es float. inifint, NaN:not a number- javascript lo utiliza cuando no se puede resolver una operacion)

-STRING: TEXTO, parrafo (todo lo q quiera poner entre comillas) ej: "hola mundo", "8" (DEBE IR ENTRE COMILLAS: Simples, dobles o invertidas)

-BOOLEAN (valores true o false: estado booleano: respuesta con dos valores posibles)

-NULL (ausencia o nulidad de un dato)

-UNDEFINED( no hay dato definido)

-SYMBOL (no lo vemos)
*/

/* CONSTRUCTORAS
string(dato): devuelve un formato string. ese dato puede ser un numero.
Para operar se tienen q concatenar datos del mismo tipo

"hola"+1
proceso interno: "hola" + String(1) = "hola"+ "1"= "hola1" (resultado) PROCESO IMPLICITO

*/


/* OPERADORES ARITMETICOS (siempre devuelve numeros)
+:concatenacion (devuelve un string: concatenacion de dos cadenas)

+: SUMA

1+true=2 (cambio de tipado)
true=1
false=0


suma:
underfined + 1= Nan 
el underfined se debe transformar en un numero: number(underfined)=Nan (SI ALGUNO ES NAN EL RDO ES NAN: Nunca aparece en las concatenaciones: xq son numericos, NaN es un nro y concatenacion necesita un string)


typeof(null)=objet (null no es un objeto real)
null: no es ningun dato
number(null)=0
null+true=1. 0+1 =1

-: RESTA

3- "3"=0
LA RESTA SIEMPRE DEVUELVE UN NRO: No le importa si hay un string
Internamente= number("3")=3 por eso 3-"3"=3-3=0


/:DIVISION
%.RESTO DIVISION O MODULO
*:MULTIPLICACION

*/


/* FALSY or Truthy 

Todos los datos (de arriba) se pueden enmarcar en valores verdaderos o falsos.

VALORES FALSOS (FALSY)
Cuando los fuerzo a transformarlos en booleano son falsos.

-0
0
""
false
null
underfine
NaN

Boolean(8)=TRUE
Boolean(0)=FALSE
Boolean(true)=TRUE
Boolean("")=FALSE


*/

/* COMPARADORES

Comparar valores: siempre devuelven Booleanos
===(dato igual a otro=igualdad estricta) compara igualdad En valor y tipo de dato. 

SE LEE COMO:
!!es verdad q el dato es igual/distinto que..!!


== igualdad: EVALUA VALORES: NO LOS TRANSFORMA!!)
1==1 :true
1==0: false

1=="1"=true
(el valor numerico de "1" es uno)
1==true: true
"1"=true:true

null==0:false
(null no puede ser igual a otro dato y 0 es un valor. es una excepcion:error de JavaScript)

NaN==1:false
NaN==Nan:false
Nan NO PUEDE SER COMPARADO CON NINGUN OTRO DATO!!
Nan==null:false

Funciones Nativas 

typeof: para saber el tipo de dato de un dato
isNaN: devuelve un booleano dependiendo si es un NaN o no: verdadero cuando el dato no sea un numero


isNaN(8)=false
isNan("pepe")=true (xq "pepe" no se puede convertir en numero)
null==null:true
null==underfine:true


!=:DIFERENCIA 
1 != true:false
1!=2.true

!==:ESTRICTA DIFERENCIA
1!=="1":true (es verdad que son distintos?? si x eso true)

>
1>0:true
"a">"b":false (tabla ascii) si tiene mayor o menor valor 
<
1<0: false
"b"<"a": true
>=
<=

*/

/* 

TAREA!!
Escribir el tipo de dato y resultado


"" == false: true
tipo de dato: Boolean
"":lo toma como false
false=false: true

1!== false: true
rdo: boolean
1 es distinto de false por eso es verdadero.
PENSAR ES VERDAD

NaN==underfined==NaN: false
cuando son 3 se calcula el rdo de los primeros dos y desp el ultimo





3+null:

3+0:

4- "8":

null==NaN:

"pepe" + "":

NaN+ "":

true===1:

*/