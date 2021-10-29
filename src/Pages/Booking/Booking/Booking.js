import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState();


    useEffect(() => {
        fetch(`https://desolate-oasis-18622.herokuapp.com/services/${serviceId}`)

            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


      console.log(services);

    return (
        <div>

            {/* <h2>Details of {services.name}</h2> */}
            <h2>Your  Booked Tour Package {serviceId}</h2>
        </div>
    );
};

export default Booking;