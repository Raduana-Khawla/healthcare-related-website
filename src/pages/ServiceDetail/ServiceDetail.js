import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


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
        <div>
        <h1>This is service Detail Page </h1>
        <h3>Name : {Details[0]?.name}</h3>
        <h3>price : {Details[0]?.time}</h3>
        <h3>description : {Details[0]?.description}</h3>
    </div>
    );
};

export default ServiceDetail;