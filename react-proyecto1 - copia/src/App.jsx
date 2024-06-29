/* cuando escribo JSX hago el import con import */
import React from 'react'
import { ColorCardList } from './colorList'

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

const App = () => {

return(
    <div className='carta'> 
        <ColorCardList colors_info = {colors_card_info}/>
    </div>

)
}


export default App


