import React from 'react'
import "./mensajeform.css"

export const  MensajeForm= () => {
    return (
        <div className='form-mje-enviar'>

            <input className= "input-texto" type="text" name="mensaje" id="mensaje" placeholder='Mensaje'/>
            
            <div className='btns-form-enviar'>
                <button className='btn' type='submit'><i class="bi bi-send"></i></button>
                <button className='btn' type='submit'><i class="bi bi-camera"></i></button>
                <button className='btn' type='submit'><i class="bi bi-plus-lg"></i></button>
            </div>
                
        </div>
    )
}

