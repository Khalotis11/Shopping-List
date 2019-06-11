import React from "react";
import logo from "./logo.jpg";
import "./App.css";

import ShoppingList from "./components/ShoppingList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ShoppingList />
      </header>
      
    </div>
  );
}

export default App;
