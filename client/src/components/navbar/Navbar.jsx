import React from 'react'
import "./navbar.scss"
function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbarcontainer">
            <span className='logo'>pera palas</span>
            <div className="navitems">
                <button className="navbutton">Register</button>
                <button className="navbutton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar