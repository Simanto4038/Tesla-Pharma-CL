import React, { useState } from 'react';
import { Container, Image, Nav, Navbar, Offcanvas, Button, ListGroup, Card} from 'react-bootstrap';
import {  NavLink,useHistory} from 'react-router-dom';
import './Navbar.css'
import logo101 from './logo.png'
import profile from './profile.png'
import Uppernav from './Uppernav';
// import UseFirebase from '../../Hooks/UseFirebase';
import useAuth from '../../Hooks/useAuth';


const Navigationbar = () => {
  const [show, setShow] = useState(false);
  const {user ,SignoutHandler} = useAuth()
  const history = useHistory();
 
  // products to be rendered on the UI
 // console.log(user);

  const {displayName,email,photoURL} = user;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  function UserProfile() {
    
  
    return (
      <>
        
     
        <Offcanvas show={show}  placement='end'  onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>User Detail</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Card className='border border-0'>
              <div>
        
              <Card.Header className='text-center'> {displayName}  </Card.Header>
              <div  className='p-2 text-center' >
                  <img src={photoURL? photoURL : profile } style={{height:'55px',width:'55px',borderRadius:"100%"}} alt="" />
              </div>
              </div>
          
          <ListGroup variant="flush">
            <ListGroup.Item>Name: {displayName} </ListGroup.Item>
            <ListGroup.Item>Email:{email}</ListGroup.Item>
            <ListGroup.Item>
            <Card.Body>
           <Button onClick={SignoutHandler} className="btn btn-dark">Sign Out</Button>
           <Button className="btn btn-dark ms-2">Detail</Button>
            
          </Card.Body>
            </ListGroup.Item>
          </ListGroup>
        </Card>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  


  
  return (
    <div>
      <Uppernav/>
      <Navbar collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand href="/"> <Image src={logo101} style={{height:'60px',width:'105px'}} rounded /></Navbar.Brand>
  <Navbar.Toggle  style={{color:'crimson',backgroundColor:'crimson'}} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className=" w-75 mx-auto linkBox ">
    <NavLink 
     className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}} 
    activeStyle={{ fontSize:'20px', fontWeight: "bold",color: "crimson"}} to="/home">Home</NavLink >
    <NavLink  className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}} 
    activeStyle={{ fontSize:'20px', fontWeight: "bold",color: "crimson"}} to="/about">About</NavLink >
    <NavLink  className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}}
    activeStyle={{fontSize:'20px', fontWeight: "bold",color: "crimson"}} to="/services">Our Services</NavLink >
    <NavLink  className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}}
    activeStyle={{fontSize:'20px', fontWeight: "bold",color: "crimson"}}  to="/ProfileDetail">Profile Detail</NavLink >
    
   
    </Nav>
   
    
    <img onClick={handleShow} src={photoURL? photoURL : profile } style={{height:'55px',width:'55px',borderRadius:"100%"}} alt="" />
      
     <UserProfile/>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};




export default Navigationbar;