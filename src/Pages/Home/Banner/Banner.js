import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Banner.css'

export const Banner = () => {
    return (
        <>
        <Carousel className='image'>
  <Carousel.Item >
    <img
      className="d-block  "
      src="https://i.ibb.co/4jrRF8V/1.png"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="http://www.wallanmedical.com.au/wp-content/uploads/2021/11/blockchain-healthcare.jpg"
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://i.ibb.co/5FpsscJ/2.png"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
        </>
    )
}

export default Banner;