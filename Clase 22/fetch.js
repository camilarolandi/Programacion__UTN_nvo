const URL_API = 'https://jsonplaceholder.typicode.com'

/* const obtenerUsuarioPorID = async (id) =>{
    const userInfoHTML = document.getElementById("user-info")
    userInfoHTML.innerHTML = `<h2> Cargando ...</h2>`
    
    const response = await fetch(URL_API + '/users/'+ id,{
        method: 'GET'
    })

    const user = await response.json()
    
    console.log(user)
    userInfoHTML.innerHTML= `
    <h2> Nombre: ${user.name} </h2>
    <br>
    <span> Phone: ${user.phone} </span>
    <br>
    <span> Email: ${user.email}</span>
    `
}

obtenerUsuarioPorID(1) */


const buscarPorId= async (id) =>{
    const response = await fetch(URL_API + '/users/'+ id,{
        method: 'GET'
})

    const user = await response.json()
    return (user)
}



const obtenerUsuarioPorID = async (id) =>{
    const userInfoHTML = document.getElementById("user-info")
    

    const user = await buscarPorId (id)
    
    renderizarUsuario(user)
    
}


const renderizarUsuario= async (valorBusqueda, buscarCallback) => {
    const userInfoHTML = document.getElementById("user-info")
    userInfoHTML.innerHTML = `<h2> Cargando ...</h2>`
    const user = await buscarCallback (valorBusqueda)
    
    userInfoHTML.innerHTML= `
    <h2> Nombre: ${user.name} </h2>
    <br>
    <span> Phone: ${user.phone} </span>
    <br>
    <span> Email: ${user.email}</span>
    `

}

renderizarUsuario(1, buscarPorId)




