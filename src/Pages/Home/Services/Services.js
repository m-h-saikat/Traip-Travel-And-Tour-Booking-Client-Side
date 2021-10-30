import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

import spinner from '../../../images/spinner.gif'

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://desolate-oasis-18622.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services ">
      <h2 className=" my-5 services-header p-3 m-3 mx-auto">
        Our Most Desire Packages 
      </h2>
{services.length===0 ? <span>   <div className=" justify-content-center w-100 d-flex">
                                <img src={spinner} alt="" width="300" height="300"/>
                            </div></span>:(<div className="row row-cols-1 row-cols-md-3 m-2  ">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>)}



    </div>
  );
};

export default Services;
