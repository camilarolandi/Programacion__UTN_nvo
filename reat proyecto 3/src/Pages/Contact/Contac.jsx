import React from 'react'
import { useParams } from 'react-router-dom'
import { lista_contactos } from '../../contactos'


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
    </div>
	)
}

