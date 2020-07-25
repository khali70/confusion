import React, { useState } from "react";
import { DISHES } from "./shared/Dishes";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// Components
import Menu from "./Components/menuComponent";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NotFound from "./Components/Notfound";

function App() {
  const [dishes] = useState(() => [...DISHES]);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/home" component={() => <Home />} />
          <Route path="/menu" component={() => <Menu dishes={dishes} />} />
          {/* <Redirect path="/" component={() => <NotFound />} /> */}
          <Route component={() => <NotFound />} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
