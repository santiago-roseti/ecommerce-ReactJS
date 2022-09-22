import React from "react";
import Navbar from "./Components/Navbar/navbar";
import { Slogan } from "./Components/ItemListContainer";
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
    <ItemList />
    </main>
    </>
  )
}
export default App




/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming soon...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
