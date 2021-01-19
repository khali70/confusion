import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import Loading from "../Lodaing";
import { URL } from "../../../shared/baseURL";
import { Link } from "react-router-dom";
const Menu = ({ dishes, loading, dishErr }) => {
  if (loading) {
    return (
      <div className="container">
        <div className="row text-center py-5">
          <Loading />
        </div>
      </div>
    );
  } else if (dishErr) {
    return (
      <div className="container">
        <div className="row text-center py-5">
          <h4 className="col-12">{dishErr}</h4>
        </div>
      </div>
    );
  }
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
            <div className="col-12 col-md-3 my-1" key={dish._id}>
              <Card>
                <Link to={`/menu/${dish._id}`}>
                  <CardImg object src={`${URL}${dish.image}`} alt={dish.name} />
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
