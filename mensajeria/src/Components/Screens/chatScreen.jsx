import React from 'react'
import "./chatscreen.css"
import { ListaMensajes } from '../Chat/ListaMensaje/listaMjes'
import { ChatHeader, MensajeForm } from '../Chat'






export const ChatScreen = () => {
    
    const MOOK_MENSAJES = [
    {
        author: 'Lola',
        text: 'Hola, todo bien? ',
        estado: 'Visto',
        day: 'Hoy',
        hour: '13:15',
        id: '1'
    },
    {
        author: 'Yo',
        text: 'Hola! todo bien y vos?',
        estado: 'Visto',
        day: 'Hoy',
        hour: '13:16',
        id: '2'
    },
    {
        author: 'Lola',
        text: 'Me alegro! Yo estoy muy bien',
        estado: 'No entregado',
        day: 'Hoy',
        hour: '13:17',
        id: '3'
    },
    {
        author: 'Yo',
        text: 'Que hacemos esta noche ?',
        estado: 'Entregado',
        day: 'Hoy',
        hour: '13:18',
        id: '4'
    },
    {
        author: 'Yo',
        text: 'Vamos a la fiesta ? 🎉👯',
        estado: 'No entregado',
        day: 'Hoy',
        hour: '13:18',
        id: '5'
    },


]
    return (
    <div className='chat'>
        <ChatHeader/>
        <ListaMensajes mensajes_info = {MOOK_MENSAJES}/>
        <MensajeForm/>
    
        
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