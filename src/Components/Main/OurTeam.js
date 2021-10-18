import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const OurTeam = () => {
    const [members,setMenber]= useState([]);

    useEffect( ()=>
    {
        const URL='./ourTeam.JSON'
        fetch(URL).then(res => res.json()).then(data => setMenber(data))
    },[])
    console.log(members);
    return (
        <div>
            <h1 className='text-center'style={{color:"rgb(123, 11, 125)"}}>Our Management Team</h1>
            <div className='container mx-auto row g-3 mt-3 pb-5 '>
            {
                members.map( member => 
                    <div className = "col-12 col-lg-4 col-md-12 ">
                    <Members key={member.key} member={member}/>
                 </div>
                    )
            }
        </div>
        </div>
    );
};

const Members= (props)=>
{
    console.log(props.member);
    const {name,image,post,Age,key}= props.member;
    return (
        <>
       
        <div className="box p-4" style={{maxHeight:'300px'}}>
       {/* <div className='text-center p-5'> <i className="fas fa-heartbeat icon-color "></i></div> */}
       <div className='text-center'><img src={image} alt="" style={{height:'85px',borderRadius:'100%'}} /></div>
       <div className='p-3'>
           <h3 className='text-center' style={{color:"rgb(143, 13, 121)"}}>{name}</h3>
           <p className='text-center h6' style={{color:"gray"}}>Honering The Post Of: {post}</p>
           <p className='text-center h4' style={{color:"rgb(143, 13, 121)"}}> {Age}</p>
           
       </div>
       
      <div className="text-center p-3">
      
      {/* <NavLink className='link'  to={`/home/healthPackage/${key}`}>
          <button type="submit" className="btn btn-outline-danger"> Package Detail </button> 
      </NavLink > */}
      
      </div>
        </div>
       
        </>
    ) ;

}
export default OurTeam;