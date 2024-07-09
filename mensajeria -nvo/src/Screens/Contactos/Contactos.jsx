/* ESTO ES LA PANTALLA DE CONTACTOS QUE CONTIENE FOTO, NOMBRE Y APELLIDO Y MENSAJE)
SERIA HOME

*/

import React from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import { Link } from 'react-router-dom'
import "./contactos.css"



export const Contactos = () => {

    return (
    
    <>
            <div className ='contact-screen'>
                <div className='contactos-header'>
                    <span className='titulos-contactos'>Chats</span>
                </div>
                <div className='contacts'>
                    {MOOK_CONTACTOS.map(contacto=>{

                        return(
                    
                            <div className= "contact-cont" key = {contacto.id}>
                                <div className='contacto-data'>
                                    <Link className='photo-link' to = {"/screen/" + contacto.id}><img className='photos' src= {contacto.thumbnail} alt="profile-photos" /></Link>
                                    <div className='contacto-mje-nombre'>
                                        <span className='nombre-cont'>{contacto.nombre} {contacto.apellido}</span>
                                        <p className='mensaje-cont'> {contacto.mensajes[0].text}</p>
                                    </div>
                                </div>
                                    
                                <div>
                                    
                                    <span className='hour'>{contacto.mensajes[0].hour}</span>
                                </div>
                                
                            </div>
                
                        )

                    })}
                </div>    
            </div>
                
        </>
    )
}


