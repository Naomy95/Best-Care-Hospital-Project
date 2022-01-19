import React from 'react'
import  { useEffect,useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setSevices] = useState([])

    useEffect(() => {
        fetch('./service.JSON')
            .then(res => res.json())
            .then(data => {
                setSevices(data);
             
            });
    }, []);
 
    return (
        <div id='services' className='home-container'>
            
           <div className='services'>
           <h1 className='service-text'>Our Popular Services</h1>
           <hr style={{width:'100px', color:'blue', margin:'auto' }} />
           <div className='popular-services'>
            
            {
            services.map(service =><Service 
                key={service.id}
                service={service}></Service>)
            }
        </div>
           </div>
        </div>
    )
}

export default Services
