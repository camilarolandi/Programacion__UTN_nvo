
/* RECIBE EL ARRAY DE MENSAJES */


import React from 'react'
import { Mensajes } from '../Mensajes/Mensajes'

export const ListaDeMensajes = ({mensajes_info}) => {
	return (
		<>
			{
				mensajes_info.map((mensaje_info) => <Mensajes mensajes = {mensaje_info} key={mensaje_info.id} />)
			}
		</>
	)
}
