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
import {
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
  postFeedback,
} from "./Redux/Action/Actions";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import NotFound from "./Components/Notfound";

function App({
  dishes,
  comments,
  promotions,
  leaders,
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
  favorites,
}) {
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
    fetchComments();
    fetchDishes();
    fetchPromos();
    fetchLeaders();
  }, []);
  const location = useLocation();
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
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
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
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  resetFeedForm: () => dispatch(actions.reset("feedback")),
  postFeedback: (values) => dispatch(postFeedback(values)),
});
export default connect(MapStateToProps, MapDispachToProps)(App);
/**
 * withRouter must be used inside a Route with readux
 */
// TODO users register reduser action actioncreator store
// TODO add the admin panale add,del,updata dishes get users
// TODO add the Oauth with facebook
// TODO add data to the comments at "./Components/switch/Menu/DishInfo.js"
/**
 * the animation of the switch the screen from location compare the last one with the current the make the gesture left or right based on that
 * add comment it better to make the button fade then dragble starts with form comment && submit
 * rating use the stars instade of number
 */
