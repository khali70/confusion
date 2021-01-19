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

import { URL } from "../../../shared/baseURL";
import { FadeTransform } from "react-animation-components";
/**
 * @param {homeCard}  { item => the data to display ,err=> the err to display if data null }
 * @returns data in card or err in element
 * @description
 * react function componet display the 3 cards in the home page
 */
const RenderCard = ({ item, err }) => {
  return (
    <div className="col-12 col-md m-1">
      {item ? (
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        >
          <Card>
            <CardImg src={`${URL}${item.image}`} alt={item.name} />
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
              {item.designation ? (
                <CardSubtitle>{item.designation}</CardSubtitle>
              ) : null}
              <CardText>{item.description}</CardText>
            </CardBody>
          </Card>
        </FadeTransform>
      ) : (
        <h4>{err}</h4>
      )}
    </div>
  );
};
/**
 * @description display the featured leader dish and promotion
 */
function Home({
  dish = null,
  dishErr,
  promotion,
  promoErr,
  leader,
  leadersErr,
  loading,
}) {
  const propsArr = [
    { item: dish, err: dishErr },
    { item: promotion, err: promoErr },
    { item: leader, err: leadersErr },
  ];
  if (loading) {
    return (
      <div className="container">
        <div className="row text-center py-5">
          <Loading />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row align-items-start">
          {propsArr.map((prop, index) => {
            return <RenderCard key={index} item={prop.item} err={prop.err} />;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
