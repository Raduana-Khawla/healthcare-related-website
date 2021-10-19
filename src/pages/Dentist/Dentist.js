import React from "react";
import aboutImage from '../../images/dentists.png'
const Dentist=()=>{
    return(
        <div className="bg-warning my-5">
            <h2 className="mt-3 text-black">Our Dentist</h2>
        <div className="">
                <img className="img-fluid  rounded" src={aboutImage} alt="" />
            </div>
        </div>
              
           
    )
}

export default Dentist;