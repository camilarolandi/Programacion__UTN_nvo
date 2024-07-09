
/* funciona pero no envia */
import React, { useState } from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import { useParams } from 'react-router-dom'
import { Header, Mensajes, NuevoMje } from '../../Components'
import "./screenchat.css"

	
	export const Screen = () => {

	const { contactoID } = useParams()
    
	const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(contactoID))
	
	const [mensajes_data, setMensajesInfo]= useState(MOOK_CONTACTOS)
	
	const newMensaje = (nuevoMensaje) => {
				
		setMensajesInfo([...mensajes_data,{
		author: "Yo",
		text: nuevoMensaje,
		estado: 'Visto',
		day: 'Hoy',
		hour: '13:15',
		id: mensajes_data.length + 1
	}])
	
}

	return (
		<div className='screen-chat'>
			<Header/>
			<Mensajes contacto = {contacto} />
			<NuevoMje enviarMensaje={newMensaje}/>
			
		</div>
		)
	}
	
	