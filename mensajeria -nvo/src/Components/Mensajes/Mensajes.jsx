/* ES EL CHAT CON LOS MENSAJES */
/* funciona pero no envia */
import React from 'react'
import "./mensajes.css"

export const Mensajes = ({contacto}) => {

        return (
        <div className='contenedor-chats'>
            {contacto.mensajes.map(mensaje=>(        
                <div className= {`contenedor-chat ${mensaje.author === "Yo" && "derecha"} `} key={mensaje.id}>  
                    <div className={`chats ${mensaje.author === "Yo" && "der"}`}>
                        <span className='author'>{mensaje.author} </span>
                        <p className='mensaje-texto'>{mensaje.text}</p>
                        
                        <div className='contenedor-inferior'>
                            <span>{mensaje.day} {mensaje.hour}</span>
                            <span > {mensaje.estado}</span>
                        
                        </div>
                    
                    </div>
                </div>
                    
                ))}
        </div>
    
    )
}
