import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
        return (
    <header>
        <nav>
            <NavLink to={"/contacto"}>Contacto</NavLink>
            <NavLink to={"/carrito"}>Carrito</NavLink>
        </nav>

    </header>
    )
}
