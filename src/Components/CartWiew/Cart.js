import React from "react"
import { HStack, Image, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import "./cart.css"

export const Cart  = () => {
    const { totalPrice, cartList, removeProduct, cleanCart } = useCartContext();
    console.log(cartList)
    return (
        <>
            {cartList.map(prod =>
                <HStack className="cartContainer" key={prod.id} p="6" rounded="md" spacing={30}>
                <Image className="prod-cart-img" src={prod.image}></Image>
                <Text as="b">{prod.products}</Text>
                <Text as="b"> Precio: ${prod.price}</Text>
                <Text as="b"> Cantidad: {prod.quantity}</Text>
                <Button className="removeButton" colorScheme='red' variant='outline' size='sm' onClick={()=> removeProduct(prod.id)}>X</Button>
                </HStack>
            )}
            {cartList.length === 0 ?
                <div className="carritoVacio">    
                    <h3>Tu carrito está vacío!</h3>
                    <h3>Para regresar al inicio hacé click <Link to="/"className="link">acá</Link></h3>
                </div>
                :
                <>
                <h4 className="precio-total">Total: ${totalPrice()}</h4>
                <div className="btnContainer">
                <Button className="btnCarrito" colorScheme="red" variant="contained" size="sm" onClick={cleanCart}>Vaciar carrito</Button>
                <Link to = "/form"><Button className="btnCarrito" colorScheme='red' variant="contained" size="sm">Finalizar compra</Button></Link>
                </div>
                </>
            }
        </>
    )
}
