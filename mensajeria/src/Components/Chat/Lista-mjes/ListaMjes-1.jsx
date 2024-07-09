
/* RECIBE EL ARRAY DE MENSAJES */


import React from 'react'
import { Prueba } from '../../../prueba/Prueba'

export const ListaMjes = ({mensajes_info}) => {
	return (
		<>
			{
				mensajes_info.map((mensaje_info) => <Prueba mensajes = {mensaje_info} key={mensaje_info.id} />)
			}
		</>
	)
}
