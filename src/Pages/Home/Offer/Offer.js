import React from 'react'
import './Offer.css'
import { Card } from 'react-bootstrap';

const Offer = (props) => {
    console.log(props)
    const{name,img}=props.offer;
    return (
        <div className='all-offers col-lg-4'>
             <Card className="offer" style={{ width: '15rem'}}>
<Card.Img className="offer-image" variant="top" src={img} />
<br />
<br />
<Card.Body>
 <Card.Title className="title-color">{name}</Card.Title>
  <Card.Text >
  
 </Card.Text> 

 </Card.Body>
</Card>
        </div>
    )
}

export default Offer
