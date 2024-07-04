import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
        return (
    <header>
        <nav>
            <NavLink to={"/contacto"}>Contactos</NavLink>
            <br/>
            <NavLink to={"/carrito"}>Carrito</NavLink>
        </nav>

    </header>
    )
}
