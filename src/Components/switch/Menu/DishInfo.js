import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  CardImgOverlay,
  Button,
} from "reactstrap";

import { FadeTransform, Fade, Stagger } from "react-animation-components";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { postComment, postFavorite } from "../../../Redux/Action/Actions";

import AddCommentBtn from "./addCommentBtn";
import Lodaing from "../Lodaing";
import { URL } from "../../../shared/baseURL";

/**
 * the coloms
 * - dish img ,dish discription
 * - comments at this dish
 */
class DishInfo extends Component {
  render() {
    let {
      dish,
      comments,
      loading,
      dishErr,
      commentsErr,
      postfavorites,
      favorites,
    } = this.props;

    if (loading) {
      return (
        <div className="container">
          <div className="row text-center py-5">
            <Lodaing />
          </div>
        </div>
      );
    } else {
      // const date = comments.map((item) => {
      //   let x = new Intl.DateTimeFormat("en-US", {
      //     year: "numeric",
      //     day: "2-digit",
      //     month: "short",
      //   }).format(new Date(Date.parse(item.date)));
      //   return x;
      // });
      return (
        <div className="container">
          {!dishErr && !commentsErr && (
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/menu">Menu</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>{dish.name}</h3>
                <hr />
              </div>
            </div>
          )}

          <div className="row ">
            {dishErr ? (
              <h4 className="col-12 col-md-5">{dishErr}</h4>
            ) : (
              <div className="col-12 col-md-5 ">
                <FadeTransform
                  in
                  transformProps={{
                    exitTransform: "scale(0.5) translateY(-50%)",
                  }}
                >
                  <Card>
                    <CardImg
                      object
                      src={`${URL}${dish.image}`}
                      alt={dish.name}
                    />
                    <CardImgOverlay>
                      <Button
                        onClick={() => {
                          if (
                            favorites.dishes
                              .map((dishid) => dishid._id === dish._id)
                              .indexOf(true) < 0
                          ) {
                            postfavorites(dish._id);
                          }
                        }}
                      >
                        {favorites.dishes
                          .map((dishid) => dishid._id === dish._id)
                          .indexOf(true) > -1 ? (
                          <i className="fa fa-heart"></i>
                        ) : (
                          <i className="fa fa-heart-o"></i>
                        )}
                      </Button>
                    </CardImgOverlay>
                    <CardBody>
                      <CardTitle> {dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                  </Card>
                </FadeTransform>
              </div>
            )}
            {commentsErr ? (
              <h4 className="col-12 col-md-6">{commentsErr} </h4>
            ) : (
              <div className="col-12 col-md-6 ">
                <h2 className="text-left">Comments</h2>
                <Stagger in>
                  {comments.map((comment, index) => (
                    <Fade in>
                      <div key={comment._id}>
                        <p>{comment.comment} </p>
                        <p>
                          --{" "}
                          <span>
                            {" "}
                            {`${comment.author.firstname} ${comment.author.lastname}`}
                          </span>{" "}
                          {/*TODO <span>{date[index]} </span> */}{" "}
                        </p>
                      </div>
                    </Fade>
                  ))}
                </Stagger>
                <AddCommentBtn
                  addComment={this.props.addComment}
                  dishId={dish._id}
                />
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}
const MapStateToProps = (state) => ({
  // favorites
  favorites: state.favorites.favorites,
});
const MapDispachToProps = (dispatch) => ({
  addComment: (dishId, rating, comment) =>
    dispatch(postComment(dishId, rating, comment)),
  postfavorites: (dishId) => dispatch(postFavorite(dishId)),
});

export default connect(MapStateToProps, MapDispachToProps)(DishInfo);
