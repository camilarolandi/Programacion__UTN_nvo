/* Listado de mensajes 
RECIBE EL ARRAY DE MENSAJES */


import React from 'react'
import { Mensajes } from '../Mensajes/Mensajes'


export const ListaDeMensajes = ({mensajes_info}) => {
	return (
		<div className='contenedor-chats'>
			{
				mensajes_info.map((mensaje_info) => <Mensajes mensaje = {mensaje_info} key={mensaje_info.id} />)
			}
		</div>
	)
}
