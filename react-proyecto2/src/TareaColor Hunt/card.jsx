import React from 'react'
import './style.css'


export const Card = ({cartaDeColores})=>{
    const {likes, fecha, colors} = cartaDeColores
    
    
    return(

        <div className = "color-card"> 
            <div className = "colors"> 

                    <div className = "color" style={{ backgroundColor: colors[0] }} ></div> 
                    <div className = "color" style={{ backgroundColor: colors[1] }} ></div> 
                    <div className = "color" style={{ backgroundColor: colors[2] }} ></div> 
                    <div className = "color" style={{ backgroundColor: colors[3] }} ></div> 
        </div>

        <div className = "color-card-controls">
            <button className = "btn-like"><i className="bi bi-heart"></i> {likes}</button>
            <span className = "time">{fecha}</span>
        </div>



        

    </div>
    )


}