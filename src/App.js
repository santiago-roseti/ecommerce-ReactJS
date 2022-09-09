import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Slogan from "./Components/ItemListContainer";

const App = () =>{
  return (
    <>
    <Navbar />
    <main>
    <Slogan />
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
