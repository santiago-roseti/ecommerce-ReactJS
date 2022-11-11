import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useCartContext } from "../../context/CartContext"
import { Button } from "@chakra-ui/react"
import "./ItemDetail.css"

const ItemDetail = ({ Item }) => {
    const [IrCarrito, setIrCarrito] = useState(false)
    const { addToCart, cartList } = useCartContext();
    
    const onAdd = (quantity) => {
        addToCart(Item, quantity)
        setIrCarrito(true)
    };
    console.log(cartList)
    
    return(
    <div className="CardDetail">
        <image src={Item.image} w="200px" alt="Card Image"/>
        <p className="info">
        <h1 className="titulo">{Item.name}</h1>
        {Item.description}
        <h1>${Item.price}</h1>
        {
            IrCarrito ?
            <Link to="/cart"><Button className="btnCarrito">Ir al carrito</Button></Link>
            :
            <ItemCount stock = {10} onAdd = {onAdd}/>
        }
        <Link to={`/category/Catálogo`}><Button className="seguirComprando">Seguir comprando</Button></Link>
        </p>
    </div>
    )}

    export default ItemDetail