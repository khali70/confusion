import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { FadeTransform, Fade, Stagger } from "react-animation-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DishdetailComponent from "./DishdetailComponent";
import { postComment } from "../../../Redux/Action/Actions";
import Lodaing from "../Lodaing";
import { URL } from "../../../shared/baseURL";

class DishInfo extends Component {
  render() {
    const { dish, comments, loading, dishErr, commentsErr } = this.props;
    if (loading) {
      return (
        <div className="container">
          <div className="row text-center py-5">
            <Lodaing />
          </div>
        </div>
      );
    } else {
      const date = comments.map((item) => {
        let x = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          day: "2-digit",
          month: "short",
        }).format(new Date(Date.parse(item.date)));
        return x;
      });
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
                      <div key={comment.id}>
                        <p>{comment.comment} </p>
                        <p>
                          -- <span> {comment.author}</span>{" "}
                          <span>{date[index]} </span>{" "}
                        </p>
                      </div>
                    </Fade>
                  ))}
                </Stagger>
                <DishdetailComponent
                  addComment={this.props.addComment}
                  dishId={comments[0].dishId}
                />
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}
const MapDispachToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
});

export default connect(null, MapDispachToProps)(DishInfo);
