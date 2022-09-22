import React from "react"

const Item = ({ films }) =>{
    console.log(films)
    return(
        <>
        {/* <img src={require(`../assets/imagenes/${films.image}`)}/> */}
        <h3>{films.name}</h3>
        <p>{films.description}</p>
        <h6>${films.price}</h6>
        <button>Ver más</button>
        </>
    )
}
export default Item;