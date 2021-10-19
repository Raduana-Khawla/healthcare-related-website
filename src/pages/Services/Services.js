import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    //loading data
    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServices(data);
        })
    },[])

   return(
    <section className="container my-5 color">
    <p className="text-center fw-bolder">Dental Services</p>
    <h2 className="text-center fw-bolder">Our <span style={{ color: '#ff4d30' }}>Services</span></h2>
    <p className="text-center text-black">"Life is short,so smile while you still have teeth."</p>

    {/* render Services from server side */}
    <div className="row">
        {
            services.map(service => <Service key={service.id} 
            service={service}></Service>)
        }
    </div>
</section>
   )
}

export default Services;