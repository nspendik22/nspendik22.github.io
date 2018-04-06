import React from 'react'
import Link from 'gatsby-link'
import html5 from '../assets/devicon-master/icons/html5/html5-original-wordmark.svg'
import css from '../assets/devicon-master/icons/css3/css3-original-wordmark.svg'
import javascript from '../assets/devicon-master/icons/javascript/javascript-original.svg'
import react from '../assets/devicon-master/icons/react/react-original-wordmark.svg'
import node from '../assets/devicon-master/icons/nodejs/nodejs-original-wordmark.svg'
import jquery from '../assets/devicon-master/icons/jquery/jquery-original-wordmark.svg'
import android from '../assets/devicon-master/icons/android/android-original-wordmark.svg'
import mongo from '../assets/devicon-master/icons/mongodb/mongodb-original-wordmark.svg'
import bootstrap from '../assets/devicon-master/icons/bootstrap/bootstrap-plain-wordmark.svg'
import npm from '../assets/devicon-master/icons/npm/npm-original-wordmark.svg'
import github from '../assets/devicon-master/icons/github/github-original-wordmark.svg'
import webpack from '../assets/devicon-master/icons/webpack/webpack-original-wordmark.svg'

import rails from '../assets/devicon-master/icons/rails/rails-original-wordmark.svg'
import mysql from '../assets/devicon-master/icons/mysql/mysql-original-wordmark.svg'

import nextopia from '../assets/nextopia.webp'
import separator from '../assets/separator.png'
import nik from '../assets/nik.jpg'


const SecondPage = () => (
  <section style={{ textAlign:'center' }}>
    <div class="about" style={{backgroundColor:'white'}}>

      <div className="container">
      <div className="profile-pic">
      <div className="wrapper">
      <h1 className="title white surround">ABOUT</h1>
      </div>
      <div className="black-overlay full"></div>
      </div>
       
      <div className="pic">
      <div className="contain">
  <div className="monster"></div>
  <div className="hair"></div>
  <div className="face">
    <div className="eyes">
      <div className="iris"></div>
    </div>
  </div>
  <div className="mouth"></div>
  <div className="drool"></div>
  <div className="teeth">
    <div></div>
    <div></div>
  </div>
  <div className="text"></div>
</div>
          {/*<img src="https://images.urbanoutfitters.com/is/image/UrbanOutfitters/39653142_001_s"/>*/}
          </div>
          <div className="socket">
      <h2 className="pad title">About Me</h2>
      <img src={separator}/>
      <p>
        Hello World! and welcome to my portfolio website. I am a Computer Engineering graduate currently working as a Software Developer for Nextopia Software Corp. 
        Currently my interests are in Coding, Sports, Gaming, Music, Cooking and new technologies.
        I am familiar with a wide variety of programming languages and have developed multiple projects, which you can view on my portfolio page. 
        In my spare time, I like hop on my PS4 and play some video games, play guitar and of course -- work on side projects. 
        If you want to get in touch with me, feel free to contact me at <a href="mailto:nspendik@gmail.com">nspendik@gmail.com</a>.
        </p>
        </div>
      </div>
    <div className="skills">
    <h2 className="title white">Languages & Tools</h2>
        <div className="items">
            <img src={html5}/>
            <img src={css} />
            <img src={react}/>
            <img src={node}/>
            <img src={javascript}/>
            <img src={jquery}/>
            <img src={android}/>

            <img src={github}/>
            <img src={mongo} />
            <img src={webpack}/>
            <img src={bootstrap}/>
            <img src={npm}/>
            <img src={rails}/>
            <img src={mysql}/>
        </div>
    </div>
    <div className="experience">
      <div className="sec">
        <h2 className="title">Experience</h2>
      </div>
    </div>
    <div className="work">
      <div className="banner">
        <div className="content">
          <h2 className="title">Nextopia Software</h2>
          <h3 className="subtitle">Software Developer</h3>
          <h6 className="subtitle">Site Search, Navigation & Merchandising Solutions for Internet Retailers.</h6>
        </div>
      </div>
    </div>
  </div>
  </section>
)

export default SecondPage
