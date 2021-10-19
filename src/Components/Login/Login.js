import React from 'react';
import googlelogo from './google.png'

import { Form , Button,Card, ListGroup, ListGroupItem, Navbar } from 'react-bootstrap';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
//import { getAuth, signInWithPopup,signInWithEmailAndPassword ,FacebookAuthProvider,signOut ,sendPasswordResetEmail  } from "firebase/auth";


import './logSign.css'
import initializeAuthentation from '../Firebase/FirebaseInitialization';
import UseFirebase from '../../Hooks/UseFirebase';

initializeAuthentation()
const Login = () => {
  // const [email,setEmail]=useState('')
  
  // const [password,setPassWord]=useState('')
 
const {user,
      GoogleSignInHandler,
       error,
      SignoutHandler,
      setEmail,
      setError,
      setUser,
      setPassWord,
      SigninWithEmail}=UseFirebase()


  //console.log(user);



  const location = useLocation()
  //console.log(location.state?.from);
  const redirect_URL = location.state?.from || '/home'
  const history = useHistory()

  const HandleGoogleLogIn = ()=>
  { 
    GoogleSignInHandler().then((result) => {
  
      const {displayName,email,photoURL} = result.user;
      const loggedinUserInfo={
        name:displayName,
        email:email,
        photo:photoURL
      }
  
      setUser(loggedinUserInfo);
      history.push(redirect_URL)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      
      setError(errorCode);
      // ...
    });
  }



 
 const handleEmailchange =(e)=>
 {
   setEmail(e.target.value); 
 }
 const handlePasswordchange =(e)=>
 {
   setPassWord(e.target.value); 
 }
 
    return (
        <div className="mt-5 row">
            
            <div className='col-12 col-lg-4 col-md-6  mx-auto  text-start p-4  '>
            <h2>Sign In / Log In</h2>

    <Form onSubmit={SigninWithEmail}>
    
           
    <Form.Group  controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control onBlur={handleEmailchange} type="email" placeholder="Enter email" required />
    </Form.Group>

    <Form.Group controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onBlur={handlePasswordchange} type="password" placeholder="Password" required />
    </Form.Group>
    <small className='text-danger'> {error} </small> <br />
  <Button variant="primary" style={{fontWeight: "bold", fontSize:'20px',color:"white",marginTop:'5px'}} type="submit">
    
  Sign In
  </Button>
  {/* <Button variant="link" onClick={"resetPasword"}>Forgate Your Password??</Button> */}
  </Form>
   
 

   <br />
   <p className='h5'>OR LOG IN WITH</p>
  <Button type="submit" onClick={HandleGoogleLogIn} className='btn btn-dark' >LOG IN WITH <img src={googlelogo} style={{height:'20px',width:'20px'}} alt="" /></Button>
  
    
  <br />
  
  <Navbar.Text className='h6 pe-3 '>
  <p className='h6 mt-3'>Don't have an account ??</p>
       <NavLink
     className='link' style={{fontWeight: "bold",color:"blue"}} 
    activeStyle={{ fontWeight: "bold",color: "crimson"}} to="/signUp"> Sign Up <i className="fas fa-sign-in-alt"></i></NavLink >
      </Navbar.Text>
</div>

{ 
 ( user.name||user.email) && <div>
<Card className='w-50 mx-auto'>
  <Card.Img variant="top"className='mx-auto' src={user.photo} style={{height:'125px',width:'125px',borderRadius:"100%"}} alt="" />
  <Card.Body>
    <Card.Title>Student Detail</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Name:{user.name}</ListGroupItem>
    <ListGroupItem>Email:{user.email}</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
   <Button onClick={SignoutHandler} className="btn btn-dark">Sign Out</Button>
   <Button className="btn btn-dark ms-2">Detail</Button>
    
  </Card.Body>
</Card>

        </div>
}
        </div>
    );
};

export default Login;