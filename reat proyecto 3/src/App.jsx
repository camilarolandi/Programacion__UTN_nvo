import React from 'react'
import { Cart, Contac, Contact, Detail, Home } from './Pages'
import { Route, Routes } from 'react-router-dom'




function App() {

    return (

<Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/detalle/:productId" element = {<Detail/>}/>
    <Route path = "/contacto" element = {<Contact/>}/>
    <Route path = "/carrito/" element = {<Cart/>}/>
    <Route path = "/contac/:contactId" element = {<Contac/>}/>
</Routes>

    )
}

export default App


