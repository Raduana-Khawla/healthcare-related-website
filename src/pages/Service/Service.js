import React from "react";
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
            <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between ">
                    <h3 className="text-warning fw-bold">{time}</h3>
                    <Link to={`/bookService/${id}`}>
                        <button className="btn btn-success">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);
};

export default Service;