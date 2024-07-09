
import React from 'react'
import "./header.css"
import {MOOK_CONTACTOS } from '../../../Mook';
import { Link, useParams } from 'react-router-dom';




export const Header = () => {		
const {contactoID } = useParams();
    
	const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(contactoID));
	return (
		
			<div className='header'>
				<Link className='flecha' to = {"/contactos/" + contacto.id}><i class="bi bi-arrow-left"></i></Link>
					<div className='contenedor-contacto'>
					<Link className='photo-link' to = {"/contactodata/" + contacto.id}><img className='photos' src= {contacto.thumbnail} alt="profile-photos" /></Link>	
					<div className='contenedor-nombre'>
						<span className='nombre'>{contacto.nombre} {contacto.apellido}</span>
						<span className='mensaje-texto'>{contacto.estado_contacto} </span>
					</div>
					
				</div>
				<div className='btns-header'>
					<button className='btn' ><i class="bi bi-telephone"></i></button>
					<button className='btn' ><i class="bi bi-camera-video"></i></button>
				</div>
			</div>
		)}







