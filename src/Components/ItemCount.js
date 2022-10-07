import React, {useState} from "react"
const ItemCount = ({stock, onAdd}) => {
const [contador, setContador] = useState(1);
const suma = () => {
    stock > contador && setContador(contador + 1) ; console.log("+1");
}
const resta = () => {
    contador !== 1 && setContador(contador - 1) ; console.log("-1")
}
const agregarCarrito = () => {
    setContador(contador);
    onAdd(contador);
}
return(
    <>
    <div>desafio clase 5</div>
    <h1>{contador}</h1>
    <button onClick={suma}>+</button>
    <button onClick={resta}>-</button>
    <button onClick={() => agregarCarrito(contador)}>Agregar al carrito</button>
    </>
)
}
export default ItemCount