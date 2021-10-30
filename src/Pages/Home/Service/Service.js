import React from "react";
import "./Service.css";

import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, price, Description, Img } = service;
  return (
    <div className="col mb-4 " id="services">
      <div class="card h-100 ">
        <img
          src={Img}
          class="card-img-top"
          alt="..."
          height="450"
          className="p-3 rounded"
        />
        <div class="card-body">
          <h2 class="card-title text-danger">{name}</h2>
          <p class="card-text">{Description.slice(0, 500)}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">
            <h4 class="text-primary mt-1 mb-5">Budget: ${price}</h4>{" "}
            <Link to={`/booking/${_id}`}>
              <button className="btn btn-danger mb-3">Book This Package</button>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Service;
