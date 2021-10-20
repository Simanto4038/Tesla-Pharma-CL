import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

import banner101 from './phygio101.jpg'
import banner102 from './diaganostic104.jpg'
import banner103 from './diaganostic105.jpg'
import './HealthPackage.css'
const HealthPackageDetail = () => {
    const [helthPackages,setHelthpackages]=useState([])
    const{healthID}=useParams();
    //console.log(healthID);
    useEffect(()=>
    {
        const URL = `../../healthPackage_${healthID}.JSON`
        //console.log(URL);
        fetch(URL).then(res => res.json()).then(data => setHelthpackages(data))
    },[]);
    //console.log(helthPackages);
    return (
      <>  
      <div className="container mx-auto row g-0">
      <div className="col-12 col-md-4 col-lg-4"><img src={banner101} className="img-fluid" alt="" /></div>
      <div className="col-12 col-md-4 col-lg-4"><img src={banner102} className="img-fluid" alt="" /></div>
      <div className="col-12 col-md-4 col-lg-4"><img src={banner103} className="img-fluid" alt="" /></div>
     
      
      </div>
      <div className='h1 text-center mt-5'> Health Checkup & Consultency Packages </div>
        <div className='container mx-auto row g-3 mt-3 pb-5 '>
        {  
            helthPackages.map( hpackage => 
                <div key={hpackage.key} className = "col-12 col-lg-4 col-md-12 ">
                <HealthpackagesDetail key={hpackage.key} hpackage={hpackage}/>
             </div>
                )
        }
    </div>
      </>
    );
};

const HealthpackagesDetail= (props)=>
{
    //console.log(props.hpackage);
    const {name,Focus,Available1,Available2,Price,key}= props.hpackage;
    return (
        <>
        <NavLink className='link'  to={`/home/healthPackage/${key}`}>
        <div className="box">
       <div className='text-center p-5'> <i className="fas fa-heartbeat icon-color "></i></div>
       <div className='p-3'>
           <h3 className='text-center' style={{color:"rgb(143, 13, 121)"}}>{name}</h3>
           <p className='text-center' style={{color:"gray"}}>Focus: {Focus}</p>
           <div className="d-flex p-2 justify-content-between">
           <p className='text-center h6 p-2 border border-2' style={{color:"crimson"}}>Package 1: {Available1}</p>
           <p className='text-center h6 p-2 border border-2' style={{color:"crimson"}}>Package 2: {Available2}</p>
           </div>
           <p className='text-center h4' style={{color:"rgb(143, 13, 121)"}}>Price: {Price}</p>
           {/* <div className='text-center'><img src={image} alt=""style={{height:'65px'}} /></div> */}
       </div>
       
      <div className="text-center p-3">
      
           <button type="submit" className="btn btn-outline-danger"> Add To My List <i className="fas fa-heart love-color"></i> </button> 
      
      </div>
        </div>
        </NavLink >
        </>
    ) ;

}

export default HealthPackageDetail;