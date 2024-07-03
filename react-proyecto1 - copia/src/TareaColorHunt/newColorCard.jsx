import React from 'react'

export const NewColorCard = ({handleSubmitNewColorCard}) => {
  return (

        <form className="form-carta-colores" onSubmit = {handleSubmitNewColorCard}> 
            <h2>Crea tu carta de color</h2>
            <div >
                <label>Ingrese color 1</label>
                <input id ="color-1"  name="color-1" type="text" />
                <label>Ingrese color 1</label>
                <input id ="color-2"  name="color-2" type="text" />
                <label>Ingrese color 1</label>
                <input id ="color-3"  name="color-3" type="text" />
                <label>Ingrese color 4</label>
                <input id ="color-4"  name="color-4" type="text" />
            </div>
            <div>
                <label htmlFor="fecha" id="fecha" name="fecha">Ingrese fecha</label>
                <input id ="fecha" name="fecha" type="text" />

            </div>
            <input type="submit" />
        </form>
    )

  
}
