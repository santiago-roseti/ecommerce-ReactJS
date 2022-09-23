import React from "react"

const ItemDetail = ({Item}) => {
    return(
        <>
        <h3>{Item.name}</h3>
        <img src={Item.image} w="200px"/>
        <p>{Item.description}</p>
        <h6>${Item.price}</h6>
    </>
    )}

    export default ItemDetail