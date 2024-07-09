import React from 'react'
import "./nvomje.css"

export const NuevoMje = ({enviarMensaje}) => {
	const handleSubmitNewMensaje =(e) =>{
		e.preventDefault()
		enviarMensaje(e.target[0].mensaje.value)
		e.target.reset()
	}

	return (
		<div className='form-mje-enviar'>
			<form className='formulario' onSubmit= {handleSubmitNewMensaje}>
				<input className= "input-texto" type="text" name="mensaje" id="mensaje" placeholder='Mensaje'/>
				<button className= "btn" type='submit'><i className="bi bi-send"></i></button>
			</form>
		</div>
	)
}
