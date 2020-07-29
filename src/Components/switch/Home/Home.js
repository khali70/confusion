import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import Loading from "../Lodaing";

const RenderCard = ({ item }) => {
  return (
    <div className="col-12 col-md m-1">
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
    </div>
  );
};

function Home({ dish = null, promotion, leader, loading, err }) {
  const propsArr = [dish, promotion, leader];
  if (loading) {
    return (
      <div className="container">
        <div className="row text-center py-5">
          <Loading />
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
  }
  return (
    <div className="container">
      <div className="row align-items-start">
        {propsArr.map((prop, index) => {
          if (prop) {
            return <RenderCard key={index} item={prop} />;
          } else return false;
        })}
      </div>
    </div>
  );
}

export default Home;
