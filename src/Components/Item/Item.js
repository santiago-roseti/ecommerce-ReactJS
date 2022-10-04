import React from "react"
import { Button } from "@mui/material"
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
        <Link to={`/detalle/${films.id}`}><Button variant="contained">Ver detalle</Button></Link>
        </div>
        </>
    )
}
export default Item;