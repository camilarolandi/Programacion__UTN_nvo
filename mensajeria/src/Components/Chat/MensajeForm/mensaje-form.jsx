import React from 'react'
import "./mensajeform.css"


/* enviar mensaje: fn q uso para pasar como prop en el padre (chatscreen) */
export const  MensajeForm= ({enviarMensaje}) => {
        
        const handleSubmitNewMensaje =(e) =>{
                e.preventDefault()
                enviarMensaje(e.target[0].value)
                e.target.reset()
            }
    
        return (
            <div className='form-mje-enviar' >
            
            <form className='formulario' onSubmit = {handleSubmitNewMensaje}>
            
                <input className= "input-texto" type="text" name="mensaje" id="mensaje" placeholder='Mensaje'/>
                <button className= "btn" type='submit'><i className="bi bi-send"></i></button>
            </form>
    
        </div>
        )
    } 



/* import React from 'react'

export const MensajeForm = ({handleSubmitNewMensaje}) =>  {
        
    return (
        <div className='form-mje-enviar' >
        
        <form className='formulario' onSubmit = {handleSubmitNewMensaje}>
        
            <input className= "input-texto" type="text" name="mensaje" id="mensaje" placeholder='Mensaje'/>
            <button className= "btn" type='submit'><i class="bi bi-send"></i></button>
        </form>

    </div>
    )
}


 */