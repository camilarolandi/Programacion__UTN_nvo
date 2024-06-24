import React from "react"
import {useState} from "react"

export const Text = () => {
    
    const [show, setShow] = useState(true)
    
    const handleShow = () => {
        setShow(!show)
    }

    return(
        <div>
            {show && <h2>Hola! </h2>}
            <button onClick={handleShow}>{show ? "Ocultar" : "Mostrar"}</button>
        
        </div>
    )

}