import React, { useState } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "./shared/Dishes";
// Components
import Menu from "./Components/menuComponent";

function App() {
  const [dishes] = useState(() => [...DISHES]);
  console.log(dishes);
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
