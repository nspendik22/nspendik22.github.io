import React from 'react'
import Link from 'gatsby-link'
import bars from '/Users/nikolasspendik/Documents/Gatsby/gatsby-site/src/components/Header/bars.png'
//import './index.css'
//import more from '/Users/nikolasspendik/Documents/Gatsby/gatsby-site/public/static/site.js'

function more(){
  var b = document.querySelector("button");
  var list = document.querySelector("ul");
  //l.setAttribute("style", "display: block !important;");


  if (list.style.display == "none"){
    list.style.display = "block";
}else{
    list.style.display = "none";
}
}
function scrollme(){
  document.body.scrollIntoView(false,{ behavior: 'smooth' });
}

const Header = () => (
<div
    style={{
      background: 'black',
      position:'fixed',
      width:'100%',
      top:'0',
      zIndex:'2'
      //marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: '90%',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        > Nikolas Spendik
        </Link>
      </h1>
      <button className="bars" onClick={more}><img src={bars}/></button>
  <nav>
      <ul style={{ listStyleType: "none"}}>
      <Link to="/page-2/"><li>ABOUT</li> </Link>
      <Link to="/page-3/"><li>PORTFOLIO</li></Link>
      <a href="#"><li>RESUME / CV</li> </a>     
            </ul>
      
  </nav>
    </div>
  </div>


)

export default Header

  