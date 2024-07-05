import React, { useState } from 'react'
import "./chatscreen.css"
/* import { ListaMensajes } from '../Chat/ListaMensaje/listaMjes' */
import { ChatHeader, ListaMensajes, MensajeForm} from '../Chat'
import { MOOK_MENSAJES } from '../../../dataMensajes'






export const ChatScreen = () => {
    
    const  [mensajes, setMensajesInfo] = useState(MOOK_MENSAJES)
    
        const newMensaje = (nuevoMensaje) => {
            setMensajesInfo([...mensajes,{
            author: 'Yo',
            text: nuevoMensaje,
            estado: 'Visto',
            day: 'Hoy',
            hour: '13:15',
            id: mensajes.length + 1
        }])
        
    }

    return (
    <div className='chat'>
        <ChatHeader/>
        <ListaMensajes mensajes_info = {mensajes} />
        <MensajeForm enviarMensaje = {newMensaje}/>
    
        
    </div>
    )
}


/* 
RAZONAMIENTO
representa toda la pantalla de chat, guarda todo el chat

muestra 3 componentes
-CHAT HEADER INFO
-LISTA DE MJES
-INPUT PARA ENVIAR EL FORMULARIO (MENSAJE FORM)
<div>
        <ListaMensajes/> (hace el mapeo, como? recibe un array, lista de mensajes por props y mapea y x cada mensaje invoca al componente mensajes es similar a la carta de colores )
        <ChatHeader/>
        <MensajeForm/>
</div>


*/




