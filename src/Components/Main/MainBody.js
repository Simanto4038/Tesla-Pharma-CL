import React from 'react';
import Banner from './Banner';
import HealthPackage from './HealthPackage';
import MainService from './MainService';

const MainBody = () => {
    return (
        <div className="mt-5" style={{backgroundColor:"rgba(221, 217, 220, 0.685)"}}>
            <Banner/>
            <MainService/>
            <HealthPackage/>
        </div>
    );
};

export default MainBody;