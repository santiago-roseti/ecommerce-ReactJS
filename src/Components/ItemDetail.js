import React from "react"
import { Link } from "react-router-dom"
const ItemDetail = ({Item}) => {
    return(
        <>
        <h3>{Item.name}</h3>
        <img src={Item.image} w="200px"/>
        <p>{Item.description}</p>
        <h6>${Item.price}</h6>
        <Link to={`/category/Catálogo`}><button>Volver</button></Link>

    </>
    )}

    export default ItemDetail