import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import Detail from '../Detail/Detail';
import './Details.css'

const Details = () => {
    const { detailId } = useParams();
    const id = parseInt(detailId);
    console.log(id)
    const [departments, setDepartments] = useState([])
    useEffect(() => {
        fetch('/detail.JSON')
            .then(res => res.json())
            .then(data => setDepartments(data));
    }, []);

    const details = departments.find(detail => detail.id === id)
    
    return (

        
        <div className='detail-container row'>
          <div className='col-lg-4 col-md-12 col-sm-12 pt-5 px-5 '>
          <Nav className="flex-column text-dark " >
  <Nav.Link className='text-dark'  as={HashLink} to='/details/1'>Cardiology</Nav.Link>
  <Nav.Link className='text-dark' href="/details/2">Pediatric</Nav.Link>
  <Nav.Link className='text-dark' href="/details/3">Neorology</Nav.Link>
  <Nav.Link className='text-dark' href="/details/4">Gynecology</Nav.Link>
  <Nav.Link className='text-dark' href="/details/5">Dental</Nav.Link>
  <Nav.Link className='text-dark' href="/details/6">Otorhinolaryngology</Nav.Link>
 
  
</Nav>
          </div>
        
               <div className='col-lg-8 col-md-12 col-sm-12 mt-2'>
               <Detail details={details}></Detail> 
               </div>
                 
        </div>
    );
};

export default Details;