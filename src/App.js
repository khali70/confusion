import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
// Components
import Header from "./Components/Header";
import Home from "./Components/switch/Home/Home";
import About from "./Components/switch/About/About";
import Menu from "./Components/switch/Menu/menuComponent";
import Contact from "./Components/switch/contact/Contact";
import Footer from "./Components/Footer";
import DishInfo from "./Components/switch/Menu/DishInfo";
import {
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
} from "./Redux/Action/Actions";
// import NotFound from "./Components/Notfound";

function App({
  dishes,
  comments,
  promotions,
  leaders,
  loading,
  err,
  resetFeedForm,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
}) {
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
        loading={loading}
        err={err}
      />
    );
  };
  useEffect(() => {
    fetchComments();
    fetchDishes();
    fetchPromos();
    fetchLeaders();
  }, []);
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
                loading={loading}
                err={err}
              />
            )}
          />
          <Route
            path="/aboutus"
            component={() => <About leaders={leaders} />}
          />
          <Route
            path="/contactus"
            component={() => <Contact resetFeedForm={resetFeedForm} />}
          />

          <Route
            exact
            path="/menu"
            component={() => (
              <Menu
                dishes={dishes}
                comments={comments}
                loading={loading}
                err={err}
              />
            )}
          />
          <Route exact path="/menu/:dishId" component={DishwithID} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
const MapStateToProps = (state) => {
  return {
    dishes: state.dishes.dishes,
    loading: state.dishes.isLoading,
    err: state.dishes.err,
    comments: state.comments.comments,
    promotions: state.promotions.promotions,
    leaders: state.leaders.leaders,
  };
};
const MapDispachToProps = (dispatch) => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  resetFeedForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchLeaders: () => dispatch(fetchLeaders()),
});
export default connect(MapStateToProps, MapDispachToProps)(App);
/**
 * withRouter must be used inside a Route with readux
 */
