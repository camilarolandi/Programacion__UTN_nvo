/* cuando escribo JSX hago el import con import */
import React, { useState } from 'react'
import { ColorCardList } from './TareaColorHunt/colorList'
/* import { Contador } from './contador/contador' */
import { NewColorCard } from './TareaColorHunt/newColorCard'



const colors_card_info = [
    {
        likes: 9,
        fecha: '3 hours',
        colores: ['#EEEDEB', '#E6B9A6', '#939185', '#2F3645'],
        id:1
    },
    {
        likes: 12,
        fecha: '1 hour',
        colores: ['#36BA98', '#E9C46A', '#F4A261', '#E76F51'],
        id:2
    },
    {
        likes: 2018,
        fecha: '2 day',
        colores: ['#93DDCF', '#F7F9F9', '#7776B5', '#E2BBE9'],
        id:3
    },
    {
        likes: 18,
        fecha: '5 day',
        colores: ['#99DDCF', '#F9F9F2', '#7676B3', '#E4BBE9'],
        id:4
    },
    {
        likes: 9,
        fecha: '2 day',
        colores: ['#91DDCF', '#F7F9F2', '#7776B3', '#E2BBE9'],
        id:5
    },
    {
        likes: 4,
        fecha: '1 day',
        colores: ['#219C90', '#059212', '#D8EFD3', '#78ABA8'],
        id:6
    },
    {
        likes: 9,
        fecha: '2 day',
        colores: ['#91DDCF', '#F7F9F2', '#7776B3', '#E2BBE9'],
        id:7
    },
    {
        likes: 9,
        fecha: '2 day',
        colores: ['#91DDCF', '#F7F9F2', '#7776B3', '#E2BBE9'],
        id:8
    }
]  


    
/* ESTADO: desestructuracion de un array (el valor de retorno de useState) que proviene de la fn useState (fn q crea un estado, proviene de react) useState retorna un array donde el 1er elemento es el valor actual del estado y el 2do una funcion para cambiar el valor del estado
IMPORTARLA SIEMPRE 
useState recibe x parametro el valor inicial*/



const App = () => {
    const [colorCardInfoList, setColorCardInfo]= useState(colors_card_info)

    const handleSubmitNewColorCard = (e)=>{
e.preventDefault()
const newColorCard ={
colores: [],
likes: Math.floor(Math.random() * 100),
fecha: e.target.fecha.value
}
for (let i=1; i <= 4; i = i+1){
newColorCard.colores.push(e.target ["color-" + i].value)
}
/* clonacion del array */
setColorCardInfo([...colorCardInfoList, newColorCard])

}
    return(
    <div className='carta'> 
        <ColorCardList colors_info = {colorCardInfoList}/>
      {/*   <Contador limit={10}/> */}
        <NewColorCard handleSubmitNewColorCard ={handleSubmitNewColorCard}/>
    </div>

)
}


export default App


