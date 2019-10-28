import React from "react";
import "./App.css";
import List from "./components/PizzaList/list";
import Cart from "./components/ShoppingCart/cart";

function App() {
  return (
    <div className="App">
      <List></List>
      <Cart></Cart>
    </div>
  );
}

export default App;
