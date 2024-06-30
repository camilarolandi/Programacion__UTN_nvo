/* este componente mapea, llama a mensaje */

import React from 'react'
import { Mensaje } from '../Mensaje/mje'
import "./listamensaje.css"



/* recibe el array de mensajes */

export const ListaMensajes = ({mensajes_info}) => {
    
    return (
    <div className='cont'>  
            {
                mensajes_info.map((mensaje_info) => <Mensaje mensajes = {mensaje_info} key= {mensaje_info.id} />)
            }
    </div>
    )
}
