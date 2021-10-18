import React from 'react';
import Banner from './Banner';
import HealthPackage from './HealthPackage';
import MainService from './MainService';
import OurTeam from './OurTeam';
import TopClints from './TopClints';


const MainBody = () => {
    return (
        <div className="mt-5" style={{backgroundColor:"rgba(221, 217, 220, 0.685)"}}>
            <Banner/>
            <MainService/>
            <HealthPackage/>
            <OurTeam/>
            <TopClints/>
        </div>
    );
};

export default MainBody;