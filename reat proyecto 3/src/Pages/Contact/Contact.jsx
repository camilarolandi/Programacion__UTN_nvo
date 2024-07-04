 /*import React from 'react'
 import { lista_contactos } from '../../contactos'
import { useParams } from 'react-router-dom' */

/* 
export const Contact = () => {

	const {contactId}= useParams()
	console.log(contactId)
	const contacto = lista_contactos.find(contacto => contacto.id === Number(contactId))

	return (
    <div>
		<h1>{contacto.Nombre} {contacto.Apellido}</h1> 
		<span>{contacto.Email}</span>
		<span>{contacto.Telefono}</span>
		<span>{contacto.Direccion}</span>
    </div>
	)
}
 */
/* {lista_contactos.map (contacto=>{
	return(
		<div key={contacto.id}>
		<h2>{contacto.Nombre}{contacto.Apellido}</h2>
		<span>{contacto.Email}</span>

		<Link to = {"/detalle/" + contacto.id}>Ver contacto</Link>
		<hr/>    
	</div>
	)
})} */


import React from 'react'

export const Contact = () => {
  return (
	<div>
		Contactos:
		
	</div>
  )
}
