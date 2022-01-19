import React from 'react'
import  { useEffect,useState } from 'react';
import Offer from '../Offer/Offer';
import './Offers.css'

const Offers = () => {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        fetch('./offer.JSON')
            .then(res => res.json())
            .then(data => {
                setOffers(data);
             
            });
    }, []);
    return (
        <div id='offers' className='offer-container'>
            
           <div className='offers'>
           <h1 className='offers-text'>Special care provided by us</h1>
           <hr style={{width:'100px', color:'blue', margin:'auto' }} />
           <div className='special-offers mx-auto'>
            
            {
            offers.map(offer =><Offer
                key={offer.id}
                offer={offer}></Offer>)
            }
        </div>
           </div>
        </div>
    
    )
}

export default Offers
