
import React from 'react'
import { Card } from './TareaColor Hunt/card'





const colorCard = {
  likes: 3,
  fecha: "1 hour",
  colors: ["#36BA98", "#E9C46A", "#F4A261", "#E76F51"] ,

}

const App = () => {
    return (
    <div className ='carta'>
      <Card cartaDeColores = {colorCard}/>

    </div>
  )
}



export default App


