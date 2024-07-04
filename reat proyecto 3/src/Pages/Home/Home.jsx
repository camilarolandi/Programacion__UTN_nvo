import React from 'react'
import { lista_productos } from '../../data'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components'



export const Home = () => {
    return (
    <div>

        <Navbar/>
        <h1>Lista de productos</h1>
        <div>
            {lista_productos.map(producto=>{
                return(
                    <div key={producto.id}>
                        <h2>{producto.titulo}</h2>
                        <span>Precio: ${producto.precio}</span>
                        <Link to = {"/detalle/" + producto.id}>Ver detalle</Link>
                        <hr/>
                    </div>


                    
                )
            })}

        </div>

    </div>
    )
}

