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




