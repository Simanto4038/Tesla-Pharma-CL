import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    offset: 160,
    duration: 700
  });
const TopClints = () => {
    const [claints,setClaints]= useState([]);

    useEffect( ()=>
    {
        const URL='./Claint.JSON'
        fetch(URL).then(res => res.json()).then(data => setClaints(data))
    },[])
    console.log(claints);
    return (
        <div>
            <h1 className='text-center'style={{color:"rgb(123, 11, 125)"}}>Our Corporate Clients</h1>
            <div className='container mx-auto row g-3 mt-3 pb-5 '>
            {
                claints.map( client => 
                    <div data-aos="fade-in" className = "col-6 col-lg-3 col-md-6 ">
                    <Clients key={client.key} client={client}/>
                 </div>
                    )
            }
        </div>
        </div>
    );
};

const Clients= (props)=>
{
    console.log(props.client);
    const {image}= props.client;
    return (
        <>
       
        <div className="box p-4" style={{maxHeight:'260px'}}>
       {/* <div className='text-center p-5'> <i className="fas fa-heartbeat icon-color "></i></div> */}
       <div className='text-center'><img src={image} alt="" className='img-fluid' /></div>
      
       
      <div className="text-center p-3">
      
      
      
      </div>
        </div>
       
        </>
    ) ;

}


export default TopClints;