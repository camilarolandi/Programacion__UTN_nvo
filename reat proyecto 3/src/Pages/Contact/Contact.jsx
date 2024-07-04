
import React from 'react'
import { Link } from 'react-router-dom'
import { lista_contactos } from '../../contactos'



export const Contact = () => {

	
	return (
	<div>
		<h1>Lista de Contactos</h1>
	
		{lista_contactos.map (contacto=>{
	return(
		<div key={contacto.id}>
		<h3>{contacto.Nombre} {contacto.Apellido}</h3>
		<Link to = {"/contac/" + contacto.id}>Ver info contacto</Link>
		<hr/>    
	</div>
	)
})} 
		
	</div>
)
}
