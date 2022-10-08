import React from "react"
import {Text} from "@chakra-ui/react"
import { useCartContext } from "../../context/CartContext"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const CartWidget = () => {
    const { totalQuantity } = useCartContext()
    return (
        <>
        <ShoppingCartIcon />
        <Text className="badge" fontSize="xs">{totalQuantity()}</Text>
        </>
    )
}
export default CartWidget
