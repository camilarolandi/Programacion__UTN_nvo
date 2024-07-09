
import React from 'react'
import "./header.css"
import { MOOK_CONTACTOS } from '../../../Mook_1';
import { Link, useParams } from 'react-router-dom';




export const HeaderChat = () => {		
const { pruebaID } = useParams();
    
	const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(pruebaID));
	return (
		
			<div className='header'>
				<Link className='flecha' to = {"/contactos/" + contacto.id}><i class="bi bi-arrow-left"></i></Link>
				<div className='contenedor-contacto'>
					<img className='profile-photo' src= {contacto.thumbnail} alt="profile-photos" />
					<span className='nombre'>{contacto.nombre} {contacto.apellido}</span>
				</div>
				<div className='btns-header'>
				<button className='btn' ><i class="bi bi-telephone"></i></button>
				<button className='btn' ><i class="bi bi-camera-video"></i></button>
			</div>
			</div>
		)}