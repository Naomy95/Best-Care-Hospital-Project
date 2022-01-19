import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const{id,name,img,p}=props.service;

    return (
       
              <div className='all-products col-lg-4'>
        
        <Card className="product" style={{ width: '20rem'}}>
<Card.Img className="mx-auto" variant="top" src={img} />
<Card.Body>
 <Card.Title className="title-color">{name}</Card.Title>
 <Card.Text className='text-muted'>
 {p}
  
 </Card.Text>
 </Card.Body>
 <Card.Footer>
     <Link to={`/details/${id}`}>
     <button 
className='btn-add'>Detail
</button>
     </Link>
 </Card.Footer>
</Card>
        </div>
       
    
    )
}

export default Service
