/* 
CHAT SCREEN!!!!!!!!!!!!!
ES LA PANTALLA DEL CHAT
CONTIENE EL HEADER, EL CONTENEDOR DE MENSAJES (PRUEBA :|) Y EL FORMULARIO DE ENVIO

*/

	
import React from 'react'
import { Prueba } from '../../prueba/Prueba'
import { MOOK_CONTACTOS } from '../../../Mook'
import { useParams } from 'react-router-dom'
import "./screenchat.css"
import { Header } from '../Contactos/Header-1/Header'
import { NuevoMje } from '../Contactos/Enviar-1/NuevoMje'
	
	export const Prueba2 = () => {

	const { pruebaID } = useParams();
    
	const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(pruebaID));
	return (
		<div className='screen-chat'>
			<Header/>
			<Prueba contacto = {contacto} />
			<NuevoMje/>
			
		</div>
		)
	}
	