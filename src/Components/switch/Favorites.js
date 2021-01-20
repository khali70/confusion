import React from "react";
import { Media, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deleteFavorite } from "../../Redux/Action/Actions";
import { URL } from "../../shared/baseURL";
import Loading from "./Lodaing";

/**
 * @returns dish as media card
 */
function RenderMenuItem({ dish, deleteFavorite }) {
  return (
    <Media tag="li">
      <Media left middle>
        <Media object src={URL + dish.image} alt={dish.name} />
      </Media>
      <Media body className="ml-5">
        <Media heading>{dish.name}</Media>
        <p>{dish.description}</p>
        <Button outline color="danger" onClick={() => deleteFavorite(dish._id)}>
          <span className="fa fa-times"></span>
        </Button>
      </Media>
    </Media>
  );
}

/**
 * return the favorties dishes of the user
 */
const Favorites = ({ isLoading, errMess, dishes, deleteFavorite }) => {
  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{errMess}</h4>
        </div>
      </div>
    );
  } else if (dishes) {
    const favdishes = dishes.map((dish) => {
      return (
        <div key={dish._id} className="col-12 mt-5">
          <RenderMenuItem dish={dish} deleteFavorite={deleteFavorite} />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>My Favorites</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>My Favorites</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <Media list>{favdishes}</Media>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <h4>You have no favorites</h4>
        </div>
      </div>
    );
  }
};
const MapStateToProps = (state) => {};
const MapDispatchToProps = (dispatch) => ({
  deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId)),
});
export default connect(MapStateToProps, MapDispatchToProps)(Favorites);
