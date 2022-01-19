import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';



const Detail =(props)=>{
    const{name,img,p} = props?.details || {};
   

    return (
        
            <Card style={{ width:'100%' }}>
  <Card.Img variant="top" src={img} style={{ width:'30%', margin:'auto' }} />
  <Card.Body>
    <Card.Title className='font-weight-bolder'>{name}</Card.Title>
    <Card.Text className='text-muted'>
     {p}
    </Card.Text>
    <Link to={`/appointment`}>
   <button className='btn-add'>Make booking</button>
   </Link>
  </Card.Body>
</Card>
        
    )
}

export default Detail;
