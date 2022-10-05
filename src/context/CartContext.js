import { createContext, useState, useContext} from "react"

const CartContext = createContext([])
export const useCartContext = ()=> useContext(CartContext)

export function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([])
    const IsInCart = (id) => cartList.find(prod => prod.id === id)

    const addToCart = (item, quantity) => {
        if (IsInCart(item.id)) {
            const newCart = cartList.map(prod => {
                if (prod.id === item.id){
                const newQuantity = prod.quantity + quantity
                return{...prod, quantity: newQuantity}
            } else {
                return prod
            }
        })
        setCartList(newCart)
        } else {
            const newProduct = {...item, quantity: quantity}
            setCartList([])
        }
    }

    const removeProduct = (id) => setCartList(cartList.filter(prod => prod.id != id))

    const cleanCart = () => setCartList([])
    return(
        <CartContext.Provider value={{
            addToCart,
            removeProduct,
            cleanCart
        }}>
        {children}
        </CartContext.Provider>
    )
}