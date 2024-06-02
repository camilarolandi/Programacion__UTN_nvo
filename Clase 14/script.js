/* FOR
Se usa cuando quiero repetir algo tanta cantidad de veces
for:bucle de conteo. while: bucle condicional
ejemplo mandar un mail a 300 usuarios
calcular iva de 800 productos
si o si poner ;
 for (let iterador: nombre variable de donde comienza =1;condicion : limite dle bucle (mientras mi iterador sea...) cuanto se incrementa la variable)
for (let iterador (i)=1; iteracion <=3; iteracion=iteracion+1)


    no escribir true, u operaciones ttrue, truly xq el bucle se ejecuta infinito
*/

/* CONSIGNA: Mostrar por alerta el conteo del 1 al 10. Puedo poner iterador o lo que quiera lo mas generico es poner i o iterador o cuando tengo for dentro de otro j  */

/* for (let i = 1; i <= 10; i = i + 1)
    alert(i) */





/* acumulacion creo variable global con un valor neutro =0
validacion se hace antes del cambio de valores con while transformar a number despues !numero: NO numero que no sea comillas vacio ni null y con isNaN= q no se ingrese otro valor q no sea nro
casos no validos casos q no quiero xq si o si quiero un nro

si el rdo prompt
- ""
- string
-null 
*/


/* CONSIGNA: solicitar al usuario un nro 3 veces y mostrar al final de las solicitudes una alerta q diga la sumatoria de los 3 numeros */

/* let sumatoria = 0

for (let i =1 ; i <= 3 ; i= i+1){
    let numero= prompt ("Ingrese un numero")
    while(!numero || isNaN(numero)){
        numero= prompt("ERROR: Dato no valido. Ingrese un numero")
    }
    numero= Number(numero)
    sumatoria = sumatoria + numero
}
    alert ("El resultado es : " + sumatoria) */

    /* La barra invertida es un salto de linea \ */

