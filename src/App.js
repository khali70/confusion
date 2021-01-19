import React, { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
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
import Favorites from "./Components/switch/Favorites";
// Actions
import {
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
  postFeedback,
} from "./Redux/Action/Actions";
// Animation
import { TransitionGroup, CSSTransition } from "react-transition-group";
/**
 * @param data `{dishes , comments, promotions , leaders , favorites }`
 * @param serverActions `{fetch*,post*}`action functions that contact with the server over `RestApi`
 * @param errors `{*Err}`
 * @param auth the user state in the app
 */

function App({
  dishes,
  comments,
  promotions,
  leaders,
  favorites,
  loading,
  dishErr,
  commentsErr,
  promoErr,
  leadersErr,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
  resetFeedForm,
  postFeedback,
  auth,
}) {
  /**
   * @returns the dish Componet when user click the dish
   * @param {History} param0 the React router history objcet that include the `dishId`
   */
  const DishwithID = ({ match }) => {
    return (
      <DishInfo
        key={parseInt(match.params.dishId, 10)}
        dish={dishes.filter((dish) => dish._id === match.params.dishId)[0]}
        comments={comments.filter(
          (comment) => comment.dishId === match.params.dishId
        )}
        loading={loading}
        dishErr={dishErr}
        commentsErr={commentsErr}
        promoErr={promoErr}
      />
    );
  };
  useEffect(() => {
    // on the app start fetch the Comment,dishes,promotions,leader from the server
    fetchComments();
    fetchDishes();
    fetchPromos();
    fetchLeaders();
  }, []);
  const location = useLocation();
  /**
   * @description
   * react function componet that return the route if the user hase the permition
   * @param {*} param0 `{jsx.element,arguments[]}`
   */
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  return (
    <div>
      {/* navbar headre */}
      <Header />
      {/* animation container */}
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          {/* the screens in the app */}
          <Switch location={location}>
            <Route
              path="/home"
              component={() => (
                <Home
                  dish={dishes.filter((dish) => dish.featured)[0]}
                  dishErr={dishErr}
                  promotion={promotions.filter((promo) => promo.featured)[0]}
                  promoErr={promoErr}
                  leader={leaders.filter((leader) => leader.featured)[0]}
                  leadersErr={leadersErr}
                  loading={loading}
                />
              )}
            />
            <Route
              path="/aboutus"
              component={() => (
                <About leaders={leaders} leadersErr={leadersErr} />
              )}
            />
            <Route
              path="/contactus"
              component={() => (
                <Contact
                  resetFeedForm={resetFeedForm}
                  postFeedback={postFeedback}
                  isAuthenticated={auth.isAuthenticated}
                />
              )}
            />

            <Route
              exact
              path="/menu"
              component={() => (
                <Menu dishes={dishes} loading={loading} dishErr={dishErr} />
              )}
            />
            <Route exact path="/menu/:dishId" component={DishwithID} />
            <PrivateRoute
              exact
              path="/favorites"
              component={() => <Favorites {...favorites} />}
            />
            <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}
const MapStateToProps = (state) => {
  return {
    // dishes
    dishes: state.dishes.dishes,
    loading: state.dishes.isLoading,
    dishErr: state.dishes.err,
    // comments
    comments: state.comments.comments,
    commentsErr: state.comments.err,
    // promo
    promotions: state.promotions.promotions,
    promoErr: state.promotions.err,
    // leaders
    leaders: state.leaders.leaders,
    leadersErr: state.leaders.err,
    // auth && users
    auth: state.auth,
    // favorites
    favorites: state.favorites.favorites,
  };
};
// prettier-ignore
const MapDispachToProps = (dispatch) => ({
  // 
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  resetFeedForm: () => dispatch(actions.reset("feedback")),
  postFeedback: (values) => dispatch(postFeedback(values)),
});
export default connect(MapStateToProps, MapDispachToProps)(App);
