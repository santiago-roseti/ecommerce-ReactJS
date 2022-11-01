import { useState } from "react"
import { Button } from "@chakra-ui/react"
import "./ItemCount.css"

const ItemCount = ({stock, onAdd}) => {
const [contador, setContador] = useState(1);
const suma = () => {
    stock > contador && setContador(contador + 1) ; console.log("+1");
}
const resta = () => {
    contador !== 1 && setContador(contador - 1) ; console.log("-1")
}

return(
<div>
    <div className="itemCountContainer">
    <Button colorScheme="red" onClick={resta}>-</Button>
    <h2 className="count">{contador}</h2>
    <Button colorScheme="red" onClick={suma}>+</Button>
    <Button className="carrito" colorScheme="red" onClick={() => onAdd (contador)}>Agregar al carrito</Button>
    </div>
</div>
)
}
export default ItemCount