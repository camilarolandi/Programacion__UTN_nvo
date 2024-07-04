import React from 'react'
import { useParams } from 'react-router-dom'
import { lista_contactos } from '../../contactos'
import "./contact.css"


export const Contac = () => {
    const {contactId}= useParams()
	console.log(contactId)
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
        <br/>
        <img className='photos' src={contacto.Foto} alt="personas" />

    </div>
	)
}

