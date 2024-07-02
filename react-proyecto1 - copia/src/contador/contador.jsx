
import React, { useState } from 'react'

export const Contador = ({limit}) => {
    const [contador, setContador] = useState(0)
    const handleIncrementar = () => {
        if(contador != limit){
            setContador(contador + 1)
        }

    }

    const handleDecrementar = () => {
        if(contador != 0){
            setContador(contador - 1)
        }
    }
    return (
        <div>
            {
                contador === 0 
                ? (<button onClick={handleIncrementar}>Comprar</button>)
                : (
                    <>
                        <button onClick={handleDecrementar}>-</button>
                        <span>{contador}</span>
                        {
                            contador === limit
                            ? <span>Llegaste al limite</span>
                            :<button onClick={handleIncrementar}>+</button>
                            
                        }
                        
                    </>
                )
            }
            {
                contador>1 && <h2>Bien, sigue comprando</h2>
                /* contador>1 ? <h2>Bien, sigue comprando</h2> 
                ESTA MAL!! ERROR DE CHAT GTP*/
            }
            
        </div>
    )
}

