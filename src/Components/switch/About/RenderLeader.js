import React from "react";
import { Media } from "reactstrap";
function RenderLeader({ image, name, designation, description }) {
  return (
    <Media tag="li">
      <Media left middle className="align-self-center">
        <Media object src={image} alt={name} />
      </Media>
      <Media body className="ml-5">
        <Media heading>
          <h1>{name}</h1>
          <h4>{designation}</h4>
        </Media>
        <p>{description}</p>
      </Media>
    </Media>
  );
}

export default RenderLeader;
