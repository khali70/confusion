import React from "react";
import { Link } from "react-router-dom";
import Adress from "./switch/Adress";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/favorites"> My Favorites</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <Adress />
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center social ">
              <a
                href="http://google.com/+"
                className="btn btn-sm"
                style={{ backgroundColor: "#ff0000", padding: "0.25rem" }}
              >
                <i className="fa fa-google-plus text-light fa-lg"></i>
              </a>
              <a
                href="http://www.facebook.com/profile.php?id="
                className="btn btn-sm"
                style={{ backgroundColor: "#3b5998" }}
              >
                <i className="fa text-light fa-facebook fa-lg"></i>
              </a>
              <a
                href="http://www.linkedin.com/in/"
                className="btn btn-sm"
                style={{ backgroundColor: "#2867b2" }}
              >
                <i className="fa text-light fa-linkedin fa-lg"></i>
              </a>
              <a
                href="http://twitter.com/"
                className="btn btn-sm"
                style={{ backgroundColor: "#1da1f2" }}
              >
                <i className="fa text-light fa-twitter fa-lg"></i>
              </a>
              <a
                href="http://youtube.com/"
                className="btn btn-sm"
                style={{ backgroundColor: "#ff0000" }}
              >
                <i className="fa text-light fa-youtube-play fa-lg"></i>
              </a>
              <a
                href="mailto:"
                className="btn btn-sm"
                style={{ backgroundColor: "#b23121" }}
              >
                <i className="fa text-light fa-envelope fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
