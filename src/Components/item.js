import React from "react"
import { films } from "../assets/films";

const Item = ({film}) =>{
    console.log(film)
    return(
        <>
        
        <h3>{films.name}</h3>
        <p>{films.description}</p>
        <h6>${films.price}</h6>
        <button>Ver más</button>
        </>
    )
}
export default Item;