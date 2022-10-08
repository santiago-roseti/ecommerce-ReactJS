import React from "react"
import { Button } from "@mui/material"
import "./Item.css"
import { Link } from "react-router-dom"
import { Cards } from "bootstrap"
const Item = ({ products }) =>{
    console.log(products)
    return(
        <>
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <h3>{products.name}</h3>
        <img className="itemImg" src={products.image}/>
        <h6>${products.price}</h6>
        <Link to={`/detalle/${products.id}`}><Button variant="contained">Ver detalle</Button></Link>
        </div>
        </>
    )
}
export default Item;