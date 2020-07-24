import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "./shared/Dishes";
// Components
import Menu from "./Components/menuComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [...DISHES],
    };
    console.log("constructor");
    console.log("----------------------");
  }
  componentDidMount() {
    console.log("componentDidMount");
    console.log("----------------------");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    console.log("----------------------");
  }
  componentDidCatch() {
    console.log("componentDidCatch");
    console.log("----------------------");
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
