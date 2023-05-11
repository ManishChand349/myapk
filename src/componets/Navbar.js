import React from 'react'
import './navbar.css'
 
function Navbar() {
  return (
    <div className='nav'>
     <h1>Manish</h1>     
     <div className='right-nav'>
          <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Gallery</a></li>
               <li><a href="#">Contact</a></li>
          </ul>
     </div>
    </div>
  )
}

export default Navbar