import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

const DishInfo = ({ info }) => {
  if (info != null) {
    const { selectedDish: dish } = info;
    console.log(dish.comments.comment);
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
          {dish.comments.map((comment) => (
            <div>
              <p>{comment.comment} </p>
              <p>
                -- <span> {comment.author}</span> <span>{comment.date} </span>{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishInfo;
