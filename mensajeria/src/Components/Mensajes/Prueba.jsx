import React from 'react'
import "./prueba.css"
/* ES EL CHAT CON LOS MENSAJES 
*/

/*similar a contac
lista y MENSAJES */


/* funciona pero no envia */

export const M = ({contacto}) => {

        return (
        <div className='contenedor-chats'>
            {contacto.mensajes.map(mensaje=>(        
                <div className= {`contenedor-chat ${mensaje.author === "Yo" && "derecha"} `} key={mensaje.id}>  
                    <div className={`chats ${mensaje.author === "Yo" && "der"}`}>
                        <span className='author'>{mensaje.author} </span>
                        <p className='mensaje-texto'>{mensaje.text}</p>
                        
                        <div className='contenedor-inferior'>
                            <span>{mensaje.day} {mensaje.hour}</span>
                            <span > {mensaje.estado}</span>
                        
                        </div>
                    
                    </div>
                </div>
                    
                ))}
        </div>
    
    )
    }







    /* export const Prueba = ({mensajes}) => {
        const {author, text, estado, day, hour, id} = mensajes
     
        return (
            <div className='contenedor-chats'>

                    <div className= {`contenedor-chat ${author === "Yo" && "derecha"} `} key= {id}>  
                        <div className={`chats ${author === "Yo" && "der"}`}>
                            <span className='author'>{author} </span>
                            <p className='mensaje-texto'>{text}</p>
                            
                            <div className='contenedor-inferior'>
                                <span>{day} {hour}</span>
                                <span > {estado}</span>
                            
                            </div>
                        
                        </div>
                    </div>
                    
            </div>
        
        )
    } 
        
        
         */
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        /* return (
            <div className='contenedor-chats' style={{justifyContent: dir}}>
                <div className='contenedor' style={{ backgroundColor: color}}>
                    <h3 className='author'>{author}</h3>
                    <p className='mensaje-texto'> {text} </p>
                    
                    <div className='contenedor-inferior'>
                        <span className='day-hour'>{day} {hour}</span>
                        <div className= "estado-contenedor">
                            <span className='estado'>{estado}</span>
                        </div>
                    </div>         
                </div>
            </div> 
            
        
        )
    
    }
 */








