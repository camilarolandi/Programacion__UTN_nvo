import React from 'react'
import "./nvomje.css"
export const NuevoMje = () => {
	return (
		<div className='form-mje-enviar'>
				<form className='formulario'>
            
			<input className= "input-texto" type="text" name="mensaje" id="mensaje" placeholder='Mensaje'/>
			<button className= "btn" type='submit'><i class="bi bi-send"></i></button>
		</form>

		</div>
	)
}
