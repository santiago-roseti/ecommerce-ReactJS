import React from "react"
import { Text } from "@chakra-ui/react"
import { useCartContext } from "../../context/CartContext"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./cart.css"
const CartWidget = () => {
    const { totalQuantity } = useCartContext()
    return (
        <div className="iconContainer">
        <ShoppingCartIcon className="iconCart"/>
        <Text className="cantidadProds">{totalQuantity()}</Text>
        </div>
    )
}
export default CartWidget
