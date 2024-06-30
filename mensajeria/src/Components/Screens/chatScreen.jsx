import React from 'react'
import "./chatscreen.css"
/* import { ChatHeader } from '../Chat/Header/chatHeader' */
import { ListaMensajes } from '../Chat/ListaMensaje/listaMjes'
import { ChatHeader, MensajeForm } from '../Chat'






export const ChatScreen = () => {
    
    const MOOK_MENSAJES = [
    {
        author: 'Yo',
        text: 'Hola, todo bien? ',
        estado: 'visto',
        day: 'Hoy',
        hour: '13:15',
        id: '1'
    },
    {
        author: 'Lola',
        text: 'Hola! todo bien y vos?',
        estado: 'visto',
        day: 'Hoy',
        hour: '13:16',
        id: '2'
    },
    {
        author: 'Yo',
        text: 'Me alegro! Yo estoy muy bien',
        estado: 'visto',
        day: 'Hoy',
        hour: '13:17',
        id: '3'
    },
    {
        author: 'Lola',
        text: 'Que hacemos esta noche ? 🎉👯',
        estado: 'visto',
        day: 'Hoy',
        hour: '13:17',
        id: '4'
    }
]
    return (
    <>
        <ChatHeader/>
        <ListaMensajes mensajes_info = {MOOK_MENSAJES}/>
        <MensajeForm/>
    
        
    </>
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