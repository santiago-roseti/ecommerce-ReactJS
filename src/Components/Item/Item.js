import React from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

 const Item = ({ products }) =>{
    console.log(products)
    return(
        <><div class="col-md-3 m-3 shadow-lg border-light card text-center align-items-center">
        <img className="img-fluid mt-2" width="220" height="400px" src={products.image} alt="Imagen de peliculas"/>
        <div className="card-body">
        <h3 className="card-text">{products.name}</h3>
        </div>
        <h6>${products.price}</h6>
        <div className="card-footer bg-transparent">
        <Link to={`/detalle/${products.id}`}><Button colorScheme="red" variant="contained">Ver detalle</Button></Link>
        </div>
        </div>        
        </>
    )}
export default Item;

