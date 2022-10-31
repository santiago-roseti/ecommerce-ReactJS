import { useState } from "react"
import { db } from "../../firebase/Firebase"
import { Link } from "react-router-dom"
import { Button } from "@chakra-ui/react"
import { collection, addDoc, serverTimestamp} from "firebase/firestore"
import "./Form.css"

import { useCartContext } from "../../context/CartContext"
const Form = () => {
    const {cartList, cleanCart} = useCartContext()
    const [userData, setUserData] = useState({})

    const inputChange = (event) => {
        setUserData({
            ...userData, [event.target.id] : event.target.value
        })
    }
    const finalizarCompra = () => {
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            comprador: userData,
            items: cartList,
            date: serverTimestamp(),
            /* total: total */
        })
        .then(res=>{
            console.log(res.id);
            cleanCart();
        })
    }
return(
        <div className="containerForm">
            <h2>Por favor, ingresá tus datos para finalizar la compra.</h2>
        <form>
        <div>
        <label htmlFor="Nombre">Nombre</label>
        </div>
        <input type="text" id="nombre" onChange={inputChange} required></input>
        <div>
        <label htmlFor="Apellido">Apellido</label>
        </div>
        <input type="text" id="apellido" onChange={inputChange} required></input>
        <div>
        <label htmlFor="Email">Email</label>
        </div>
        <input type="text" id="email" onChange={inputChange} required></input>
        <div id="emailHelp" className="form-text">No compartiremos tus datos con nadie.</div>
        <div>
        <label htmlFor="Email">Verificá tu email</label>
        </div>
        <input type="text" id="verificarEmail" onChange={inputChange} required></input>
        <div>
        <Button colorScheme="red" size="sm" onClick={finalizarCompra}>Enviar</Button>
        <Link to = "/cart"><Button colorScheme="red" size="sm">Cancelar</Button></Link>
        </div>
        </form>
        </div>
)
}
export default Form