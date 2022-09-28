import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer, Slogan } from "./Components/ItemListContainer";
import ItemCount from "./Components/ItemCount";
import ItemDetailContainer from "./Components/ItemDetailContainer"
import { Cart }  from "./Components/CartWiew/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  const onAdd = () => {
    console.log("agregaste al carrito")
  }
  onAdd()

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Slogan />
    <ItemCount stock = {10} onAdd = {onAdd}/>
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/category/:idCategory" element={<ItemListContainer />}/>
      <Route path="/detalle/films/:id" element= {<ItemDetailContainer />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App
