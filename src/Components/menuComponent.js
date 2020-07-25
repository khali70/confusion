import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
const Menu = ({ dishes }) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row  justify-content-center">
        {dishes.map((dish) => {
          return (
            <div className="col-12 col-md-3 my-1" key={dish.id}>
              <Card>
                <Link to={`/menu/${dish.id}`}>
                  <CardImg object src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle> {dish.name}</CardTitle>
                  </CardImgOverlay>
                </Link>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Menu;
