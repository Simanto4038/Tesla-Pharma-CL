import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  offset: 200,
  duration: 700
});

const MainService = () => {

  const[services,setServices]=useState([])
  useEffect(()=>
  {
    const URL = './services.JSON'
    fetch(URL).then(response => response.json()).then(data => setServices(data))
  },[])

 
    return (
      <>
       <h1 className="text-center mt-3 border border-2">OUR SERVICES</h1>
        <div className='container mx-auto row g-3 mt-3 '>
               {
                 services.map(service => 
                  <div className = "col-12 col-lg-6 col-md-6 ">
                     <Service key={service.key} service={service} />
                  </div>
                  
                 )
               }
        </div>
        </>
    );
};

const Service = (props)=>
{  
  const {name,image,Test,Open,slide}= props.service;
  return (
    <>
   
    <div className='serviceBox'data-aos={"fade-left"}  style={{height:'220px',backgroundImage:`url(${image})`,backgroundSize:'cover',overflow:'hidden'}}>

    
    <div className='p-3 serviceHeading my-auto text-white' 
    style={{backgroundColor:'rgba(11, 142, 194, 0.534)',fontWeight:'600',display:'flex',alignItems:'end'}}> 
     <p className='mx-auto'>{name}</p> </div>
    </div>
    <p className="h5 text-primary">{Test}</p>
    <p className="h6 text-danger">***{Open}</p>
    </>
  )
}

export default MainService;