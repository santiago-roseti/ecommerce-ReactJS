import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Inicio from "./Components/Inicio/Inicio"
import { ItemListContainer } from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer"
import { Cart }  from "./Components/CartWiew/Cart"
import Form from "./Components/Form/Form"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"

const App = () => {
  const Slogan = "Aprovechá las mejores ofertas!";

  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Inicio />}/>
      <Route path="/category/:IdCategory" element={<ItemListContainer greeting={Slogan} />}/>
      <Route path="/detalle/:DetalleId" element={<ItemDetailContainer />}/>
      <Route path="/cart" element={<Cart />}/> 
      <Route path="/form" element={<Form />}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
  );
};
export default App;
