/* cuando escribo JSX hago el import con import */
import React from 'react'
import {PI,doSomething,Titulos} from "./funciones"
import {Carrito} from './Components/Carrito/carrito'
import {Counter} from './Practica/counter'
import {Text} from './Practica/mostrar-ocultar'




/* puedo escribir en flecha. pero SIEMPRE mayuscula en la primer letra. ESCRIBO HTML desde APP NO desde index  */

/* function App() { */
  

console.log(PI)
doSomething()


const App = () => {
    return (
    <div>
      {/* <h1>Hola desde react</h1> */}
     {/*  <ProductCard/> */}
      <Carrito/>
      <Titulos/>
      <Counter/>
      <Text/>
      
  

    </div>
  )
}

/* no se pueden poner varios divs. solo un elemento padre NO puedo hacer esto:

<div> 
  <h3> Titulo Producto: </h3>
</div>

<div> 
  <h3> Titulo Producto: </h3>
</div>

DEBERIA HACER:

<div> 
  <div> 
    <h3> Titulo Producto: </h3>
  </div>
</div>

O

USAR UN FRAGMENTO (Para evitar crear elementos padres, se comporta como tal pero no existe en la pagina)
<>

</>

*/


/* lo llamo donde quiero usarlo con </> */
const ProductCard = () => {
  return (

  <>
    <div>
      <h3> Titulo Producto: </h3>
      <p>Descripcion producto: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa velit quod reiciendis esse voluptatum recusandae nihil officiis quisquam, ullam sequi amet quasi soluta provident impedit praesentium voluptatem, molestiae illum harum. </p>
      <span> Precio producto: $value</span>
      <button>Comprar</button>
    </div>
    
    <div> 
      <button>Like</button>
      <button>Dislike</button>
    </div>
    
  </>

  )

}


export default App


/* TAREA:

Crear un comoponente Carrito
h1: carrito de compras

otro componente Item

<div>
    <h2>nombre producto</h2>
    <span>Cantidad: x </span>
    <button>Eliminar</button>
</div>

mostrarlo en el componente carrito en app


*/



/* clases= className */
