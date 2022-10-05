import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer, Slogan } from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer"
import { Cart }  from "./Components/CartWiew/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"
const App = () => {
  const onAdd = () => {
    console.log("agregaste al carrito")
  }
  onAdd()

  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <Navbar />
    <Slogan />
    <Routes>
      <Route path="/"/>
      <Route path="/category/:idCategory" element={<ItemListContainer />}/>
      <Route path="/detalle/:DetalleId" element={<ItemDetailContainer />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
  );
}
export default App
