/* cuando escribo JSX hago el import con import */
/* aca en App importo el screen de chat */
import React from 'react'

import { HeaderChat, ListaMensaje } from './Components'

import { Contactos } from './Contactos'
import { Screen } from './Screens/Screen'
import { Route, Routes } from 'react-router-dom'




const App = () => {
  return(
  
      <Routes>
        <Route path = "/" element = {<Contactos/>}/>
        <Route path = "/listamje/" element = {<ListaMensaje/>}/> 
        <Route path = "/screenchat/:contactosID" element = {<Screen/>}/> 
        <Route path = "/header/" element = {<HeaderChat/>}/> 
        <Route path="/contactos/:contactosID" element={<Contactos/>} />
      </Routes>
      )
  
  }
  export default App