import React from 'react';
import HealthPackage from '../Main/HealthPackage';
import MainService from '../Main/MainService';
import './Services.css'
import image101 from './Service102.jpg'
const Services = () => {
    return (
        <div>
            <div className="container ">
               
             <img src={image101} className='img-fluid  w-100' alt="" />
              
            </div>
            <MainService/>
            <HealthPackage/>
        </div>
    );
};

export default Services;