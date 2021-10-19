import React from 'react';
import { Card, ListGroup, ListGroupItem,Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import profile from './profile.png'
const ProfileDetail = () => {
    const {user,SignoutHandler } = useAuth()
  
 
  // products to be rendered on the UI
 // console.log(user);

  const {displayName,email,photoURL} = user;
    return (
        <div>
            <Card >
   
  <Card.Img variant="top" className='mx-auto mt-4'  src={photoURL? photoURL : profile } style={{height:'155px',width:'155px',borderRadius:"100%"}} />
  <Card.Body>
    <Card.Title>Name: {displayName}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Email:{email}</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Card.Body>
           <Button onClick={SignoutHandler} className="btn btn-dark">Sign Out</Button>
           <Button className="btn btn-dark ms-2">Detail</Button>
            
          </Card.Body>
  </Card.Body>
</Card>
        </div>
    );
};

export default ProfileDetail;