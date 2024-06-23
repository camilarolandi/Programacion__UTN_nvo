/* tengo que poner el export y el import en el otro archivo 

Puedo exportar variables, funciones, componentes. Los exporto con comas.

*/

import React from "react"

const PI = 3.14

const doSomething =() => {
    alert("algo")
}



const Titulos = () => {

    return(

        <>
            <h1>A</h1>
            <h2>B</h2>
        
        </>
    )
}


export {PI, doSomething, Titulos}