import React from "react";
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Service.css';

const Service=(props)=>{
    const { name, time, imageURL, description, id } = props.service;
    return(
        <div className="mb-5 col-lg-4 col-sm-6 display">
        <div className="card shadow-lg w-100 h-100 text-center rounded service">
            <div className="d-flex justify-content-center align-items-center h-75 p-2">
                <img src={imageURL} className="card-img-top h-75 w-75" alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title text-light">{name}</h5>
                <p className="text-light">{description}</p>
            </div>
            <div>
             <div className="d-flex justify-content-between m-3 list-unstyled">
                <div>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                        <FontAwesomeIcon icon={faPhoneAlt} /> <span>01682-683811</span>
                    </Link>
                </div>
                <div>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                        <FontAwesomeIcon icon={faEnvelope} /> 
                        <span className="ms-3">Envelop</span>
                    </Link>
                </div>
                </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <h3 className="text-warning fw-bold">{time}</h3>
                </div>
                <div className="mb-2">
                   <Link to={`/bookService/${id}`}>
                        <button className="btn btn-success">Details</button>
                    </Link>
            </div>
        </div>
    </div>
);
};

export default Service;