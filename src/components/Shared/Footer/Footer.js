import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots, faHome, faPlus, faTooth } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="py-5">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-white">
                    <div className="col-md-4 d-flex bg-dark p-3 rounded">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{fontSize:'40px'}} />
                        <p className="ms-2 fw-bolder">House-37,�Road-13/Ranavola Avenue,�Sector-10,Uttara</p>
                    </div>
                    <div className="col-md-4 ">
                        <h4>Quick Links</h4>
                        <div>
                        <ul className="list-unstyled">
                <li>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Book Appoinment</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                    <FontAwesomeIcon icon={faTooth} /> <span>Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
       </div>
    </div>
    <div className="col-md-4">
     <div className="rounded-circle p-5 bg-dark">
        <h4>About Us</h4>
        <p className="">Generally, the most common problems that patients face in dental clinics are bad breath and gingivitis, bleeding gums or gingivitis.To solve all these problems, we advise our esteemed patients to use scaling-polishing, curative treatment as well as an effective toothpaste.</p>
     </div>
        <br />
        <div className='d-flex justify-content-evenly'    style={{fontSize:'2em'}}>
           <FontAwesomeIcon icon={faFacebook}/>
           <FontAwesomeIcon icon={faInstagram}/>
           <FontAwesomeIcon icon={faTwitter}/>
           <FontAwesomeIcon icon={faWhatsapp}/>
         </div>
        </div>
       </div>
     </div>
    <p className="mb-0  text-center text-white">Family Care Dental Zone © 2021</p>
</footer>
    );
};

export default Footer;