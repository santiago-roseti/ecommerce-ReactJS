import React from "react"

const Item = ({ films }) =>{
    console.log(films)
    return(
        <>
        <h3>{films.name}</h3>
        <img src={films.image} w="200px"/>
        <p>{films.description}</p>
        <h6>${films.price}</h6>
        <button>Ver más</button>
        </>
    )
}
export default Item;