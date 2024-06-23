import React from "react"
import { Item } from "../Carrito-Items/items"

export const Carrito = () => {
    return(
    <section>
        <h1>Carrito de compras</h1>

        <div>
        <Item/>
        <Item/>
        <Item/>
        </div>
    </section>
    )
}
