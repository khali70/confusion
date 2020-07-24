import React, { useState } from "react";
import { Media, Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

export default ({ dishes }) => {
  const [selectedDish, setselectedDish] = useState(() => null);
  const selectDish = (dish) => {
    setselectedDish({ selectedDish: dish });
  };
  const menu = dishes.map((dish) => {
    return (
      <div className="col-12 col-md-3 my-1" key={dish.id}>
        <Card onClick={() => selectDish(dish)}>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle> {dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });
  const dishinfo = (info) => {
    if (info != null) {
      const { selectedDish: dish } = info;
      return (
        <Media list className="p-0">
          <Media tag="li">
            <Media left middle>
              <Media object src={dish.image} alt={dish.name} />
            </Media>
            <Media body className="ml-5">
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media>
        </Media>
      );
    } else {
      return <div></div>;
    }
  };
  return (
    <div className="container">
      <div className="row  justify-content-center">{menu}</div>
      <div className="row justify-content-center ">
        <div className=" col-12">{dishinfo(selectedDish)}</div>
      </div>
    </div>
  );
};
