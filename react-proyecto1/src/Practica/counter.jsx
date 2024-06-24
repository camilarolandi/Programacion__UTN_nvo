import React from "react"
import { useState } from "react"

export const Counter = () => {
    
    const [number, setNumber] = useState(0)
    
    const sumar = () => {
        setNumber(number + 1)
    }

    const restar = () => {
        setNumber(number - 1)
    }

    const borrar =() => {
        setNumber (0)
    }
    return(
        <div>
            <h2>{number}</h2>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={borrar}>Borrar</button>
        </div>
    )

}