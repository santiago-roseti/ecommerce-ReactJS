import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import { useCartContext } from "../context/CartContext"

const ItemDetail = ({ Item }) => {
    const [IrCarrito, setIrCarrito] = useState(false)
    const { addToCart, cartList } = useCartContext();
    
    const onAdd = (quantity) => {
        addToCart(Item, quantity)
        setIrCarrito(true)
    };
    console.log(cartList)
    
    return(
        <>
        <h3>{Item.name}</h3>
        <img src={Item.image} w="200px"/>
        <p>{Item.description}</p>
        <h6>${Item.price}</h6>
        {
            IrCarrito ?
            <Link to="/cart">Finalizar Compra</Link>
            :
            <ItemCount stock = {10} onAdd = {onAdd}/>
        };
        <Link to={`/category/Catálogo`}><button>Seguir comprando</button></Link>
    </>
    )}

    export default ItemDetail