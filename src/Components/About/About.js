import React from 'react';
// import img101 from '../../images/About101.jpg'

import './About.css'
const About = () => {
    return (
        <div>
            <AboutONE/>
            <AboutTwo/>
            <AboutThree/>
        </div>
    );
};

const AboutONE = ()=>
{
    return(
        <div className="row aboutOne" >
            
            <div className=" h-75 w-50 mx-auto my-auto d-flex flex-column align-items-center justify-content-center   aboutOneText">
                <h1 className='text-white'>About Us</h1>
                <p className='h6 text-white about-one-text'>Tesla Pharmecy & Diagnostic Clinic is a visionary step taken by well experienced Health
                 professionals with a mission to advance the health standards in Bangladesh by providing excellent diagnostic service.
                  Tesla Diagnostic Clinic aims to provide exceptional diagnostic service with the application of latest medical
                   equipment along with the supervision by the best professionals. Its objective to provide excellent customer 
                   service and world class diagnostic experience with the latest technology makes it stand out from the rest.</p>
                {/* <p className='h6 text-white'>Considering, the pace of technological development
                 and the growing need for excellence in the healthcare service,
                 in Tesla we offer the most advanced and high-end technology. 
                 Our SIEMENS 3 Tesla Magnetom Spectra, 
                 is one of the most advanced technology available throughout the world in terms of Magnetic Resonance Imaging (MRI).</p> */}
            </div> 
        </div>
    )
}
const AboutTwo = ()=>
{
    return(
        <div className="row abouttwo mt-5" >
            
          
            <div className=" h-75 w-50 ms-auto my-auto d-flex flex-column align-items-center justify-content-center  abouttwoText">
                <h1 className='text-white'>Our Team Completes Us</h1>
                
                <p>Our team is made up of diverse group people, all dedicated to our mission of making a positive 
                    difference in our customers life and provide the best healthcare diagnosis in Bangladesh. 
                    We understand that working together is working smarter,
                     and the result of great teamwork is better patient care with better patient satisfaction.
                </p>
            </div> 
        </div>
    )
}
const AboutThree = ()=>
{
    return(
        <div className="row aboutthree mt-5" >
            
          
            <div className=" h-75 w-75 me-auto my-auto d-flex flex-column align-items-center justify-content-center  abouttwoText">
            <h1 className='text-white'>Our Principles</h1>
                
                <p>We are the only pharmacy in Bangladesh to follow the Guidelines for Good Pharmacy Practice (GPP) principles.
                     Following our mission to provide patient centric service, 
                     we also offer counseling service to our patients regarding the medicines and medication practice.
                      Along with this, we offer a dust free,
                       temperature & humidity controlled environment to ensure the safety and protection of the medicines..
                </p>
            </div> 
        </div>
    )
}

export default About;