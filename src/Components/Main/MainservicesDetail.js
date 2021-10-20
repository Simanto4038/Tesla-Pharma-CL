import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MainservicesDetail = () => {
    const [services,setservicess]=useState([])
    const{ImgID}=useParams();
    //console.log(ImgID);
    useEffect(()=>
    {
        const URL = `../../services${ImgID}.JSON`
        //console.log(URL);
        fetch(URL).then(res => res.json()).then(data => setservicess(data))
    },[]);
    //console.log(services);
    return (
      <>  
         
        <div className='container mx-auto row g-3 mt-3 pb-5 '>
        {  
            services.map( service => 
              
                <div  key={service.key} className = "col-12 col-lg-6 col-md-12 ">
                <Mainservices  service={service}/>
             </div>
             
                )
        }
    </div>
      </>
    );
};

const Mainservices= (props)=>
{
    //console.log(props.service);
    const {name,price,image}= props.service;
    return (
        <>
        {/* <NavLink className='link'  to={`/home/healthPackage/${key}`}> */}

        <div className="box">
        <div className='serviceBox'  style={{height:'300px',backgroundImage:`url(${image})`,backgroundSize:'cover',overflow:'hidden'}}>

    
        <div className='p-3 serviceHeading my-auto text-white' 
        style={{backgroundColor:'rgba(11, 142, 194, 0.534)',fontWeight:'600',display:'flex',alignItems:'end'}}> 
         <p className='mx-auto'>{name}</p>
         <p className='mx-auto'>{price} Tk</p>
          </div>
        </div>
        </div>
        {/* </NavLink > */}
        </>
    ) ;

}

export default MainservicesDetail;