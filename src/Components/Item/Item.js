import React from "react"
import { Button } from "@mui/material"
import "./Item.css"
import { Link } from "react-router-dom"
import { Cards } from "bootstrap"
const Item = ({ films }) =>{
    console.log(films)
    return(
        <>
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <h3>{films.name}</h3>
        <img className="itemImg" src={films.image}/>
        <h6>${films.price}</h6>
        <Link to={`/detalle/${films.id}`}><Button variant="contained">Ver detalle</Button></Link>
        </div>
        </>
    )
}
export default Item;