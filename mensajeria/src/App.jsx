/* cuando escribo JSX hago el import con import */
/* aca en App importo el screen de chat */
import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { Contactos } from './Components/Contactos'
import { ChatScreen } from './Components/Screens/chatScreen'
import { Prueba } from './prueba/Prueba'
import { Mensaje } from './Components/Chat'




const App = () => {
return(
/* 
    <ChatScreen/>  */
    
    <Routes>
        <Route path = "/" element = {<Contactos/>}/>
        {/* <Route path = "/detalle/:productId" element = {<Detail/>}/> 
        <Route path = "/chat/" element = {<ChatScreen/>}/> */}
      <Route path = "/chat/" element = {<ChatScreen/>}/> 
       <Route path = "/prueba/:pruebaID" element = {<Prueba/>}/>  
      {/* <Route path = "/mensaje/:mensajeId" element = {<Mensaje/>}/>  */}
      
        
    </Routes>
    )

}

export default App

