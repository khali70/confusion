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
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DishdetailComponent from "./DishdetailComponent";
import { addComment } from "../Redux/Actions";
import Lodaing from "./Lodaing";

class DishInfo extends Component {
  render() {
    const { dish, comments, loading, err } = this.props;
    if (loading) {
      return (
        <div className="container">
          <div className="row text-center py-5">
            <Lodaing />
          </div>
        </div>
      );
    } else if (err) {
      return (
        <div className="container">
          <div className="row text-center py-5">
            <h4>{err}</h4>
          </div>
        </div>
      );
    } else if (dish != null) {
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

          <div className="row ">
            <div className="col-12 col-md-5 ">
              <Card>
                <CardImg object src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle> {dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-6 ">
              <h2 className="text-left">Comments</h2>
              {comments.map((comment, index) => (
                <div key={comment.id}>
                  <p>{comment.comment} </p>
                  <p>
                    -- <span> {comment.author}</span>{" "}
                    <span>{date[index]} </span>{" "}
                  </p>
                </div>
              ))}
              <DishdetailComponent
                addComment={this.props.addComment}
                dishId={comments[0].dishId}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
const MapDispachToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
});

export default connect(null, MapDispachToProps)(DishInfo);
