import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import mail from '../assets/48/envelope-o.png'
import git from '../assets/48/github.png'
import linkedin from '../assets/48/linkedin-square.png'
import './index.css'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Nikolas Spendik"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    
    <div
      style={{
        margin: '0 auto',
        //backgroundImage:"url('https://s-media-cache-ak0.pinimg.com/originals/c0/75/cb/c075cb0a7897357e01262e5c2ee14d16.jpg')",
        //backgroundSize:"cover",
        //height:'100vh',
        //padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        
      }}
    >
      {children()}
    </div>
    {/*<footer>
    <a href="mailto:nspendik@gmail.com"><img src={mail}/></a><a href="https://github.com/nspendik22/"><img src={git}/></a><a href="https://www.linkedin.com/in/nspendik/"><img src={linkedin}/></a>
    <p>© 2018 Nikolas Spendik</p>
    </footer>*/}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
