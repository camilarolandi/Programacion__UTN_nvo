/* Siguiendo la tarea de e-commerce:
HOME es mi CONTACTOS
DETAIL/CONTACT es mi CHATSCREEN*/

import React from 'react'
import "./contactos.css"
import { MOOK_CONTACTOS } from '../../../Mook'
import { Link } from 'react-router-dom'




export const Contactos = () => {


    return (
    <>
            <div className='contact-screen'>
                <h2 className='contacto-titulo'>Contactos</h2>
                {MOOK_CONTACTOS.map(contacto=>{

                    return(
                    <div className= "contact-cont" key = {contacto.id}>
                        
                        <Link to = {"/prueba/" + contacto.id}><img className='photos' src= {contacto.thumbnail} alt="profile-photos" /></Link>
                    
                        <h2>{contacto.nombre} {contacto.apellido}</h2>
                            
                        <p>{contacto.mensajes[0].text}</p>   
                    
                    </div>

                    )
                })}
            </div>
            <h2>componente contacto</h2>
        </> )
}


