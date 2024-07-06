import React, { useState } from 'react'
import "./chatscreen.css"
import { ChatHeader, ListaMensajes, MensajeForm } from '../Chat'
import { MOOK_CONTACTOS } from '../../../Mook'
import { MOOK_MENSAJES } from '../../../dataMensajes'

/* mensajes: contiene los datos que se le pasa a useState: MOOK
    setMensajesInfo: actualiza el estado de mensajes */


export const ChatScreen = () => {
    
    const  [mensajes_data, setMensajesInfo] = useState(MOOK_MENSAJES)
    
        const newMensaje = (nuevoMensaje) => {
            
            setMensajesInfo([...mensajes_data,{
            author: "Yo",
            text: nuevoMensaje,
            estado: 'Visto',
            day: 'Hoy',
            hour: '13:15',
            id: mensajes_data.length + 1
        }])
        
    }

    return (
        <>
        
        <div className='chat'>
        <ChatHeader/>
        <ListaMensajes mensajes_info = {mensajes_data} />
        <MensajeForm enviarMensaje = {newMensaje}/>
        </div>
        <h2>Hola</h2>
        </>
 
    )
}  






    /* export const ChatScreen = () => {
    
    const  [mensajes_data, setMensajesInfo] = useState(MOOK_MENSAJES)
    
        const newMensaje = (nuevoMensaje) => {
            
            setMensajesInfo([...mensajes_data,{
            author: "Yo",
            text: nuevoMensaje,
            estado: 'Visto',
            day: 'Hoy',
            hour: '13:15',
            id: mensajes_data.length + 1
        }])
        
    }

    return (
        <>
        
        <div className='chat'>
        <ChatHeader/>
        <ListaMensajes mensajes_info = {mensajes_data} />
        <MensajeForm enviarMensaje = {newMensaje}/>
        </div>
        <h2>Hola</h2>
        </>
 
    )
}  
 */


/* RAZONAMIENTO
representa toda la pantalla de chat, guarda todo el chat

muestra 3 componentes
-CHAT HEADER INFO
-LISTA DE MJES
-INPUT PARA ENVIAR EL FORMULARIO (MENSAJE FORM)
<div>
        <ListaMensajes/> (hace el mapeo, como? recibe un array, lista de mensajes por props y mapea y x cada mensaje invoca al componente mensajes es similar a la carta de colores )
        <ChatHeader/>
        <MensajeForm/>
</div> */







 /* export const ChatScreen = () => {
    
    const  [mensajes, setMensajesInfo] = useState(MOOK_MENSAJES)
    
    const handleSubmitNewMensaje = (e) =>{

        e.preventDefault()
        const newMensaje = {
            author: "Yo",
            text: e.target.text,value,
            estado: 'Visto',
            day: 'Hoy',
            hour: '13:15',
            id: mensajes.length + 1
        }
    }
        setMensajesInfo ([...mensajes,newMensaje])

        
    }

    return (
    <div className='chat'>
        <ChatHeader/>
        <ListaMensajes mensajes_info = {mensajes} />
        <MensajeForm handleSubmitNewMensaje = {handleSubmitNewMensaje}/>
    
        
    </div>
    )

 */



