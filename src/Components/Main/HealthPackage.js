import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HealthPackage.css'
const HealthPackage = () => {

    const [packages,setPackages]= useState([]);

    useEffect( ()=>
    {
        const URL='./healthPackage.JSON'
        fetch(URL).then(res => res.json()).then(data => setPackages(data))
    },[])
    console.log(packages);
    return (
        <>
        <div className='h1 text-center mt-5'>Health Checkup & Consultency Packages</div>
        <div className='container mx-auto row g-3 mt-3 pb-5 '>
            {
                packages.map( hpackage => 
                    <div className = "col-12 col-lg-4 col-md-12 ">
                    <Healthpackages key={hpackage.key} hpackage={hpackage}/>
                 </div>
                    )
            }
        </div>
        </>
    );
};

const Healthpackages= (props)=>
{
    console.log(props.hpackage);
    const {name,image,Available,Price,key}= props.hpackage;
    return (
        <>
        <NavLink className='link'  to={`/home/healthPackage/${key}`}>
        <div className="box">
       <div className='text-center p-5'> <i className="fas fa-heartbeat icon-color "></i></div>
       <div className='p-3'>
           <h3 className='text-center' style={{color:"rgb(143, 13, 121)"}}>{name}</h3>
           <p className='text-center h6' style={{color:"gray"}}>Available For: {Available}</p>
           <p className='text-center h4' style={{color:"rgb(143, 13, 121)"}}>Price: {Price}</p>
           <div className='text-center'><img src={image} alt=""style={{height:'65px'}} /></div>
       </div>
       
      <div className="text-center p-3">
      
      <NavLink className='link'  to={`/home/healthPackage/${key}`}>
          <button type="submit" className="btn btn-outline-danger"> Package Detail </button> 
      </NavLink >
      
      </div>
        </div>
        </NavLink >
        </>
    ) ;

}

export default HealthPackage;