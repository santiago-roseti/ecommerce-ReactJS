import React from "react";
import Navbar from "./Components/Navbar/navbar";
import { ItemListContainer, Slogan } from "./Components/ItemListContainer";
import ItemCount from "./Components/ItemCount";
import { ItemList } from "./Components/ItemList"
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
    </main>
    </>
  )
}
export default App
