/* TRATO DE EVITAR TOCAR EL MAIN. TRABAJO EN APP */


/* buena practica, evita errores HACER SIEMPRE. Todos los acrchivos JSX deben de importarse de react para q funcionen bien y no fallen */
import React from 'react' 


/* Libreria react DOM, permite crear un virtual DOM */
import ReactDOM from 'react-dom/client' 

/* Importa el componente APP. trae la funcion app. Componentes: funciones que retornan JSX (JSX: codigo muy parecido a html) por buena practica se escribe la primera letra con mayuscula, = sintaxis de una fn pero retorna html
*/
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

/* IMPORTACION AUTOMATICA

Funciona siempre q el archivo desde donde quiero importar este abierto



*/



/* render: renderiza algo dentro de un elemento: en este caso el contenido de App. Se invoca un componente con cocodrilos como si fuera html */

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>


)



