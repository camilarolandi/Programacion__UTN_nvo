import React from "react"

export const ProfileCard = ({persona})=> {
    const {nombre, edad, ubicacion} = persona
    return(
        <div>
            <h2>Nombre completo: {nombre}</h2>
            <span>Edad: {edad}</span>
            <h3>Ubicacion: {ubicacion}</h3>

        </div>
    )
}