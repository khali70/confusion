import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

class DishInfo extends Component {
  render() {
    console.log("Dish info render");
    console.log("----------------------");
    const { info } = this.props;
    if (info != null) {
      const { selectedDish: dish } = info;
      const date = dish.comments.map((item) => {
        let x = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          day: "2-digit",
          month: "short",
        }).format(new Date(Date.parse(item.date)));
        return x;
      });
      return (
        <div className="row justify-content-center ">
          <div className="col-12 col-md-6 ">
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
            {dish.comments.map((comment, index) => (
              <div>
                <p>{comment.comment} </p>
                <p>
                  -- <span> {comment.author}</span> <span>{date[index]} </span>{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishInfo;
