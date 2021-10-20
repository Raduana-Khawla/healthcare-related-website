import React from "react";
import aboutImage from '../../images/dentists.png';
import './Dentist.css';

const Dentist=()=>{
    return(
        <div className="my-5 design1">
            <h2 className="mt-3 text-black">Our Dentist</h2>
        <div className="">
                <img className="img-fluid w-75 rounded" src={aboutImage} alt="" />
            </div>
        </div>       
           
    )
}

export default Dentist;