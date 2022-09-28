import React from "react"
import "./Item.css"
import { Link } from "react-router-dom"
const Item = ({ films }) =>{
    console.log(films)
    return(
        <>
        <div className="container">
        <h3>{films.name}</h3>
        <img className="itemImg" src={films.image}/>
        <h6>${films.price}</h6>
        <Link to={`/detalle/films/${films.id}`}/><button className ="btn-detalle">Ver detalle</button>
        </div>
        </>
    )
}
export default Item;