import React from 'react'
import ReactPlayer from 'react-player'
import { Link, Route } from 'react-router-dom'
import YouTube from 'react-youtube'
import './About.css'

const About = () => {
    return (
        <div className='about'>
           <div class="jumbotron">
  <h1 class="display-4">Hello, Dear Visitors!</h1>
  <p class="lead">This is a simple reminder from us, 5-6 glass of daily water can actually keep your doctor's away!! Even if you are in need of our care, watch out our hospital location in heart-warming environment.</p>
  <hr class="my-4"/>
 
  <Link to={{ pathname: "https://youtube.com" }} target="_blank">
      <button className='btn-add'>Watch</button>
  </Link>
</div>
            
        </div>
    )
}

export default About
