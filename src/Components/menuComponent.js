import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import Info from "./DishInfo";
export default ({ dishes }) => {
  const [selectedDish, setselectedDish] = useState(() => null);
  const selectDish = (dish) => {
    setselectedDish({ selectedDish: dish });
  };
  const menu = dishes.map((dish) => {
    return (
      <div className="col-12 col-md-3 my-1" key={dish.id}>
        <Card onClick={() => selectDish(dish)}>
          <CardImg object src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle> {dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row  justify-content-center">{menu}</div>
      <Info info={selectedDish} />
    </div>
  );
};
