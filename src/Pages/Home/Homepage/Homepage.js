import React from 'react'
import About from '../About/About'
import  Banner  from '../Banner/Banner'
import Footer from '../Footer/Footer'


import Offers from '../Offers/Offers'
import Services from '../Services/Services'

const Homepage = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Offers></Offers>
            <About></About>
           <Footer></Footer>
           
        </div>
    )
}

export default Homepage
