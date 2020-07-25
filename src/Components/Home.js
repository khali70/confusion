import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
const RenderCard = ({ item }) => {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
};
function Home({ dish, promotion, leader }) {
  const propsArr = [dish, promotion, leader];
  return (
    <div className="container">
      <div className="row align-items-start">
        {propsArr.map((prop, index) => (
          <div className="col-12 col-md m-1" key={index}>
            <RenderCard item={prop} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
