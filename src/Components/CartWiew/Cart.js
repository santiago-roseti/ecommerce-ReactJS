import React from "react"
import { HStack, Image, Text, Button } from "@chakra-ui/react"
import { useCartContext } from "../../context/CartContext"

export const Cart  = () => {
    const { totalPrice, cartList, removeProduct, cleanCart } = useCartContext();
    console.log(cartList)
    return (
        <>
            {cartList.map(prod =>
                <HStack key={prod.id} boxShadow="lg" p="6" rounded="md" spacing={10} bg="white">
                <Image src={prod.image} w="100px"></Image>
                <Text as="b">{prod.products}</Text>
                <Text as="b"> Cantidad: {prod.quantity}</Text>
                <Button colorScheme="red" size="sm" onClick={()=> removeProduct(prod.id)}>X</Button>
                </HStack>
            )}
            {cartList.lenght === 0 ?
            <Text>Tu carrito está vacío</Text>
            :
            <>
            {/* <Text>Total: ${totalPrice()}</Text> */}
            <Button colorScheme="red" size="sm" onClick={cleanCart}>Vaciar carrito</Button>
            </>
            }
            
        </>
        
    )
}