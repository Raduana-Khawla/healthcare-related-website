import React from "react";
import aboutImage from "../../images/aboutPic2.jpg";
import Dentist from "../Dentist/Dentist";
import Reviews from "../Reviews/Reviews";
import './About.css';

const About=()=>{
    return(
        <>
        <section className="my-5 container colorfull">
        <div className="row">
            <div className="col-md-5 mb-3">
                <img className="img-fluid rounded-circle" src={aboutImage} alt="" />
            </div>
            <div className="col-md-6 mb-2 mt-5 ms-5">
                <h4><span className="me-5 text-white">Welcome to Family Care Dental Zone</span></h4>
                <br />
                <h3 className="fw-bolder w-50 ms-5">We Create Beautiful Smiles</h3>
                <br />
                <p className="text-white">Family Care is a modern dental clinic, specialized in advanced diagnostics and treatment of dental and oral disorders.We offer comprehensive services from all fields of dentistry. In addition to high-end dental equipment, all services are provided in a comfortable, luxury environment. New patients are welcomed with a complimentary oral health consultation.</p>
                </div>
        </div>
    </section>
    <Reviews></Reviews>
    <Dentist></Dentist>
    </>
);
};
export default About;