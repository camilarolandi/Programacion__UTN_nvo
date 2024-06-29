import React from "react"
import './stylesCartas.css'


/* tarjeta con toda la info: card_info pasa por props el array con data de la carta */
export const ColorCard = ({card_info}) => {
    const { likes, fecha, colores } = card_info
    return (
        <div className = "color-card">
            <div className = "colors">
                <ColorItemList colors = {colores}/>
            </div>
            
            <div className="color-card-controls">
                <button className = "btn-like"><i className = "bi bi-heart"></i> <span>{likes}</span></button>
                <span className = "time"> {fecha} </span>
            </div>
        </div>
    )
}


/* genera la lista de colores */
export const ColorItemList = ({colors}) => {
    return (
        <>
            {colors.map((color, index) => <ColorItem color = {color} key= {color + index}/>)}
        </>
    )
}



const ColorItem = ({color}) => {
    return (
        <div className="color" style={{ backgroundColor: color }}></div>
    )
}



