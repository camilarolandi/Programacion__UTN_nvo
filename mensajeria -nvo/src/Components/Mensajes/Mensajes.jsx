/* Cada globito de mensaje*/



import React from 'react'
import "./mensajes.css"
export const Mensajes = ({mensaje}) => {
    const {author, text, id, day, hour,estado} =mensaje
    return (
    
    <>
    
        <div className= {`contenedor-chat ${author === "Yo" && "derecha"} `} key={id}>  
            <div className={`chats ${author === "Yo" && "der"}`}>
                <span className='author'>{author} </span>
                <p className='mensaje-texto'>{text}</p>
                <div className='contenedor-inferior'>
                    <span className='day-hour'>{day} {hour}</span>
                    <div className='estado-cont'>
                        <span > {estado}</span>
                        <span > {estado === "Visto" && <i class="bi bi-check2-all"></i>}{estado === "Entregado" && <i class="bi bi-check2"></i>}</span>
                    </div>
                </div>
            </div>
        </div>
    </>

)
}

/* funciona pero no envia */
/* import React from 'react'
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
 */



