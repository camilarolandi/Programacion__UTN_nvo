import React from 'react'
import "./header.css"
import chica from "./Assets/chica.jpg"



export const ChatHeader = () => {
    return (
    
    <div className='header'>
        <div className='contenedor-contacto'>
            <img src={chica} className ="foto" alt="chica" />
            <h3 className='nombre'>Lola</h3>
        </div>
        
        <div className='btns-header'>
            <button className = "btn"><i class="bi bi-telephone"></i></button>
            <button className='btn'><i class="bi bi-camera-video"></i></button>
        </div>
        
    </div>
    )
}

