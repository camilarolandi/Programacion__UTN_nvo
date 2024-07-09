import React from 'react'
import "./listamjes.css"
/* ES EL CHAT CON LOS MENSAJES 
*/

/*similar a contac
lista y MENSAJES */

export const ListaMensaje = ({contacto}) => {

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

