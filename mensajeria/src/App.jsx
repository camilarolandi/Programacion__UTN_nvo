/* cuando escribo JSX hago el import con import */
/* aca en App importo el screen de chat */
import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { Contactos } from './Components/Contactos'
import { Prueba } from './prueba/Prueba'
import { Prueba2 } from './Components/prueba2/Prueba2'
import { Header } from './Components/Contactos/Header-1/Header'




const App = () => {
return(

    <Routes>
        <Route path = "/" element = {<Contactos/>}/>
        <Route path = "/prueba/" element = {<Prueba/>}/> 
		<Route path = "/prueba2/:pruebaID" element = {<Prueba2/>}/> 
		<Route path = "/header/" element = {<Header/>}/> 
        <Route path="/contactos/:pruebaID" element={<Contactos />} />
        
    </Routes>
    )

}

export default App

