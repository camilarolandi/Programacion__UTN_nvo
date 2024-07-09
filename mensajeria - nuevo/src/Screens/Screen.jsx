
import React from 'react'
import { MOOK_CONTACTOS } from '../../Mook_1';
import { FormularioEnvio, HeaderChat, ListaMensaje } from '../Components';
import "./screen.css"
import { useParams } from 'react-router-dom';

export const Screen = () => {
    const { contactosID } = useParams()
    
	const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(contactosID))
    return (
        <div className='screen-chat'>
			<HeaderChat/>
			<ListaMensaje contacto = {contacto} />
			<FormularioEnvio/>
			
		</div>
		)

}
