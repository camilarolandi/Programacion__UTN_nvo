/* La pantalla con la info del contacto */
import React from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import { Link, useParams } from 'react-router-dom'
import "./contactodata.css"

export const ContactoData = () => {
        const {contactoID } = useParams();
            
            const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(contactoID));
            return (
                
                    <div className='container'>
                        <Link className='flecha' to = {"/screen/" + contacto.id}><i class="bi bi-arrow-left"></i></Link>
                            <div className='container-nombre-foto'>
                                <span className='nombres'>{contacto.nombre} {contacto.apellido}</span>
                                <img className='photo' src= {contacto.thumbnail} alt="profile-photos" />
                                <span className='telefono'>{contacto.telefono} </span>
                            </div>
                            <div className='contenedor_data'>
                            <p className='estado'>{contacto.estado} </p>
                                <span className='email'>{contacto.email}</span>
                                <span className='direccion'>{contacto.direccion} </span>
                            </div>
                    </div>
                )}












