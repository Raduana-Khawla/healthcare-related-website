import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';


const ServiceDetail = () => {
    const {id} = useParams();
    const [data , setData] = useState([]);
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const Details = data.filter(detail => detail.id === id);
    
    return (
        <div className="m-5 d-flex justify-content-center align-items-center">
        <div className="card w-50 h-75 text-center rounded showOff">
          <div className="d-flex justify-content-center align-items-center h-50 p-2">
                <img src={Details[0]?.imageURL} className="card-img-top h-50 w-50" alt="" />
            </div>
       <div className="text-white">
       <h3>Name : {Details[0]?.name}</h3>
        <h5>price : {Details[0]?.time}</h5>
        <p>description : {Details[0]?.description}</p>
       </div>
    </div>
    </div>
    );
};

export default ServiceDetail;