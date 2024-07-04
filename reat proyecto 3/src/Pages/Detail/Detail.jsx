import React from 'react'
import { useParams } from 'react-router-dom'
import { lista_productos } from '../../data'




export const Detail = () => {
const {productId}= useParams()

const producto = lista_productos.find(producto=>producto.id === Number(productId))

    return (

        <div>
            <h1>{producto.titulo}</h1> <span>#{producto.id}</span>
            <h2>Precio:${producto.precio}</h2>
            <button>Comprar</button>
        </div>
    
    )

}
