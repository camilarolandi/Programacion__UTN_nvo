
/* funciona pero no envia */
import React from 'react'
import { Prueba } from '../../prueba/Prueba'
import { MOOK_CONTACTOS } from '../../../Mook'
import { useParams } from 'react-router-dom'
import "./screenchat.css"
import { NuevoMje } from '../Contactos/Enviar-1/NuevoMje'
import { Header } from '../Contactos/Header-1/Header'

	
	export const Prueba2 = () => {

	const { pruebaID } = useParams()
    
	const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(pruebaID))
	return (
		<div className='screen-chat'>
			<Header/>
			<Prueba contacto = {contacto} />
			<NuevoMje/>
			
		</div>
		)
	}
	


/* CHAT SCREEN */
/* import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MOOK_CONTACTOS } from '../../../Mook'

import { ListaMjes } from '../Chat/Lista-mjes/ListaMjes-1'
import { NuevoMje } from '../Contactos/Enviar-1/NuevoMje'





export const Prueba2 = () => {

const {contactoID} = useParams()

const contacto = MOOK_CONTACTOS.find (contacto => contacto.id === Number(contactoID))

const  [mensajes_data, setMensajesInfo] = useState([])



const newMensaje = (nuevoMensaje) => {
	
	const mjeNvo = {
		author: "Yo",
		text: nuevoMensaje,
		estado: 'Visto',
		day: 'Hoy',
		hour: '13:15',
		id: mensajes_data.length + 1
	}
	setMensajesInfo([...mensajes_data, mjeNvo])
}




return (

<div className='chat'>
        
        <ListaMjes mensaje_info = {mensajes_data} />
        <NuevoMje enviarMensaje = {newMensaje}/>
        </div>

)

}


 */