import React from 'react'
import { useParams } from 'react-router-dom'
import { MOOK_CONTACTOS } from '../../Mook'


/* ESTO SERIA MENSAJES */
export const Prueba = () => {


const{pruebaID} = useParams()
    const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(pruebaID))
    
    return (
        <div>
            {contacto.mensajes.map(mensaje=>(
                    <div key={mensaje.id}>
                        <p>{mensaje.author} dice: {mensaje.text}</p>
                        <p>Estado: {mensaje.estado}</p>
                        <p>Enviado: {mensaje.day} a las {mensaje.hour}</p>
                    </div>
                
            ))}
        

    </div>
)
}


















/* 
import { lista_contactos } from '../../contactos'



export const Contac = () => {
    const {contactId}= useParams()

	const contacto = lista_contactos.find(contacto => contacto.id === Number(contactId))

	return (
    <div>
		<span>Email: {contacto.Email}</span>
        <br/>
        <br/>
		<span>Telefono: {contacto.Telefono}</span>
        <br/>
        <br/>
		<span>Direccion: {contacto.Direccion}</span>
        <br/>
        <h3>Este es el componente CONTAC</h3>
    </div>
	)
} */
