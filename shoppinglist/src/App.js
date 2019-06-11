import React from "react";
import logo from "./logo.jpg";
import "./App.css";

import ShoppingList from "./components/ShoppingList";
import Pay from "./components/Pay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Pay />
        <ShoppingList />
      </header>
      
    </div>
  );
}

export default App;
