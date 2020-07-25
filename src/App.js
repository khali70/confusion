import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// data
import { LEADERS as leaders } from "./shared/leaders";
import { DISHES as dishes } from "./shared/dishes";
import { PROMOTIONS as promotions } from "./shared/poromotion";
import { COMMENTS as comments } from "./shared/commets";
// Components
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/menuComponent";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import DishInfo from "./Components/DishInfo";

// import NotFound from "./Components/Notfound";

const DishwithID = ({ match }) => {
  return (
    <DishInfo
      key={parseInt(match.params.dishId, 10)}
      dish={
        dishes.filter(
          (dish) => dish.id === parseInt(match.params.dishId, 10)
        )[0]
      }
      comments={comments.filter(
        (comment) => comment.dishId === parseInt(match.params.dishId, 10)
      )}
    />
  );
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route
            path="/home"
            component={() => (
              <Home
                dish={dishes.filter((dish) => dish.featured)[0]}
                promotion={promotions.filter((promo) => promo.featured)[0]}
                leader={leaders.filter((leader) => leader.featured)[0]}
              />
            )}
          />
          <Route
            path="/aboutus"
            component={() => <About leaders={leaders} />}
          />
          <Route path="/contactus" component={() => <Contact />} />

          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={dishes} comments={comments} />}
          />
          <Route exact path="/menu/:dishId" component={DishwithID} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
