/* cada globito de mensaje */
import React from 'react'
import "./mensaje.css"
import { MOOK_CONTACTOS } from '../../../../Mook'
import { useParams } from 'react-router-dom'





export const Mensaje = () => {
    const{mensajeId} = useParams()
    const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(mensajeId))
    
    return (
        <div>
            {contacto.mensajes.map(mensaje=>(
                    <div key={mensaje.id}>
                        <p>{mensaje.author} dice: {mensaje.text}</p>
                        <p>Estado: {mensaje.estado}</p>
                        <p>Enviado: {mensaje.day} a las {mensaje.hour}</p>
                    </div>
                
            ))}
        

    </div>
)







}
    

    
    /* export const Mensaje = ({mensajes}) => {
        const {author, text, estado, day, hour} = mensajes
        
        let dir
        let color
        let entregaIcono
        let estadoMje = estado
    
        if (author === "Yo"){
            dir = "end"
            color="#f5bdde"
                if(estado === "Visto"){
                entregaIcono = <i class="bi bi-check-all"></i>
                }
                else if (estado === "No entregado"){
                    entregaIcono = <i class="bi bi-clock-history"></i>
                }
                else{
                    entregaIcono = <i class="bi bi-check2"></i>
                    }
            
        }
        else{
            dir= "start"
            estadoMje = ""
        }
    
        return (
            <div className='contenedor-chats' style={{justifyContent: dir}}>
                <div className='contenedor' style={{ backgroundColor: color}}>
                    <h3 className='author'>{author}</h3>
                    <p className='mensaje-texto'> {text} </p>
                    
                    <div className='contenedor-inferior'>
                        <span className='day-hour'>{day} {hour}</span>
                        <div className= "estado-contenedor">
                            <span className='estado'>{estadoMje}{entregaIcono}</span>
                        </div>
                    </div>         
                </div>
            </div> 
            
        
        )
    
        
     */