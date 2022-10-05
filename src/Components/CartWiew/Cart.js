import React from "react"
import { useCartContext } from "../../context/CartContext"

export const Cart  = () => {
    const {addToCart, removeProduct, cleanCart} = useCartContext();
    return (
        <div>Cart</div>
    )
}