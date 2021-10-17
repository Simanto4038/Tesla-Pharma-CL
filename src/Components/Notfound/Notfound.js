import React from 'react';
import { Image } from 'react-bootstrap';
import error from './ORFI0N0.jpg';

const Notfound = () => {
    return (
        <div className = 'mt-5 text-center'>
            <h1 className='text-danger text-center'>SORRY RESULT NOT FOUND!!!!!!!</h1>
            <Image src={error} style={{height:450,width:400}}></Image>
        </div>
    );
};

export default Notfound;