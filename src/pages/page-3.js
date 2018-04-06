import React from 'react'
import Link from 'gatsby-link'
//import drone from '../assets/drone-pic.jpg'
//import eatxpress from '../assets/eatxpress-pic.jpg'
import drone from '../assets/drone-layout.png'
import eatxpress from '../assets/eatxpress-layout.png'
import mac from '../assets/mac-vector.png'






const ThirdPage = () => (

<div className="container">
<div className="portfolio-pic">
<div className="wrapper">
    <h1 className="title white surround center">PORTFOLIO</h1>
</div>
<div className="black-overlay full"></div>
</div>
    <div className="content">
        <div className="item left white-back center">
        <h3 className="title">Flight Hack</h3> 
        <div className="image-container">       
        <img src={drone}/>
        </div>
        <h5 className="subtitle">An Android application that is capable of communicating with an Arduino 
        that controls a Hubsan X4 quadcopter drone. 
        </h5>
        <a href="https://github.com/nspendik22/Hubsan-Flight-Control">View Source Code</a>
        </div>

        <div className="item grey right center">
        <h3 className="title white">EatXpress </h3>
        <div className="image-container">       
        <img src={eatxpress}/>
        </div>
        <h5 className="subtitle white">An Android application that reduces the margin of error
         and increases the time efficiency of dine-in restaurant orders.
        </h5>
        <a href="https://github.com/nspendik22/EatXpress">View Source Code</a>
        </div>    

        <div className="item left grey center">
        <h3 className="title white">Fortnite Stat Tracker</h3>        
        <div className="image-container">       
        <img src={mac}/>
        <h4 className="title white">In Development</h4> 
        </div>
        <h5 className="subtitle white">A web application that shows your stats in the game - Fortnite. This application uses the <a href="https://fortnitetracker.com/">Fortnite Tracker</a> api to get the required data. 
        </h5>
        <a className="unavailable">Source Code Unavailable</a>
        </div>

        <div className="item right white-back center">
        <h3 className="title">Meetr</h3>
        <div className="image-container">       
        <img src={mac}/>
        <h4 className="title">In Development</h4> 
        </div>
        <h5 className="subtitle">Meetr is an Instant Messenger application built with React and socket.io and takes inspiration from Slack. 
        </h5>
        <a className="unavailable">Source Code Unavailable</a>
        </div>      

    </div>
</div>


)

export default ThirdPage