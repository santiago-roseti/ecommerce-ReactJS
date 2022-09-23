import React from "react";
import Navbar from "./Components/Navbar/navbar";
import { ItemListContainer, Slogan } from "./Components/ItemListContainer";
import ItemCount from "./Components/ItemCount";
import ItemDetailContainer from "./Components/ItemDetailContainer"
const App = () => {
  const onAdd = () => {
    console.log("agregaste al carrito")
  }
  onAdd()

  return (
    <>
    <Navbar />
    <main>
    <Slogan />
    <ItemCount stock = {10} onAdd = {onAdd}/>
    <ItemListContainer />
    {<ItemDetailContainer />}
    </main>
    </>
  )
}
export default App
