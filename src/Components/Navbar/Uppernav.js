import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Uppernav = () => {
    return (
        <div>
            <Navbar className='container bg-info'>
 
    <Navbar.Brand className='h6 ps-3' ><span><i className="fas fa-phone-alt"></i>  247-30 (Emergency)</span></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className='h6 pe-3'>
      Sign In <NavLink
     className='link' style={{fontWeight: "bold",color:"gray"}} 
    activeStyle={{ fontWeight: "bold",color: "crimson"}} to="/logIn"> <i className="fas fa-sign-in-alt"></i></NavLink >
      </Navbar.Text>
  
  
    </Navbar.Collapse>
 
</Navbar>
        </div>
    );
};

export default Uppernav;