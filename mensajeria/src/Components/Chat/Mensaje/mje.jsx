/* cada globito de mensaje */

import React from 'react'
import "./mensaje.css"


export const Mensaje = ({mensajes}) => {
    const {author,text,estado,day,hour} = mensajes
    
    let dir
    let color

    if (author === "Yo"){
        dir = "end"
        color="#f5bdde"

    }

    return (
        <div className='contenedor-chats' style={{justifyContent: dir}}>
            <div className='contenedor' style={{ backgroundColor: color}}>
                <h3 className='author'>{author}</h3>
                <p className='mensaje-texto'> {text} </p>
                
                <div className='contenedor-inferior'>
                    <span className='day-hour'>{`${day} ${hour}`}</span>
                    <div className= "estado-contenedor">
                        <span className='estado'>{estado}<i class="bi bi-check-all"></i></span>
                    </div>
                </div>         
            </div>
        </div> 
        
    




    )

        
    
    
    
}
