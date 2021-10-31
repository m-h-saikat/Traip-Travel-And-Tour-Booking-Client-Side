import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Booking.css";
import useAuth from "../../../hooks/useAuth";
const Booking = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://desolate-oasis-18622.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const confirmBooking = () => {
    alert("Successfully Booked your Tour Package");
  };
  return (
    <div className="  Booking-Container  " id="About">
      <div>
        <h2 className=" my-5 Booking-header p-3 m-3 mx-auto">
          {" "}
          Confirm Your Booking{" "}
        </h2>
      </div>
      <div className=" mb-4 ">
        <div className="row d-flex">
          <div className="col-md-6 ">
            <div class="card m-5">
              <img
                class="card-img-top "
                src={services.Img}
                alt="Card image cap"
              />
              <div class="card-body">
                <h2 class="card-title text-danger">{services.name}</h2>
                <h6 class="card-text">{services.Description} </h6>
                <h4 class="card-text text-primary">
                  Budget: ${services.price}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-6  p-5 my-auto mx-auto">
            <div class="card m-2">
              <div class="card-body">
                <h2 class="card-title text-danger">Hi {user.displayName} !!</h2>
                <small>Please Confirm Your Booking</small>
                <form class=" mx-auto Confiramtion">
                  <fieldset>
                    <input
                      placeholder="Name"
                      type="text"
                      value={user.displayName}
                      tabindex="1"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      placeholder="Email"
                      type="email"
                      value={user.email}
                      tabindex="1"
                      required
                    />
                  </fieldset>

                  <fieldset>
                    <textarea
                      placeholder="Address"
                      tabindex="5"
                      required
                    ></textarea>
                  </fieldset>
                  <fieldset>
                    <input
                      placeholder="Contact Number"
                      type="number"
                      minlength="11"
                      maxlength="11"
                      tabindex="1"
                      required
                    />
                  </fieldset>

                  <fieldset>
                    <input
                      placeholder="Cupon Code"
                      type="text"
                      tabindex="1"
                      autofocus
                    />
                  </fieldset>

                  <fieldset>
                    <button
                      onClick={confirmBooking}
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      data-submit="...Sending"
                      class="btn btn-primary"
                    >
                      Confirm
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
