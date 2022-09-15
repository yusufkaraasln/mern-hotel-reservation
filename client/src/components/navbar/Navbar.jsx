import React from 'react'
import "./navbar.scss"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
  const user = useSelector(state=>state.auth.user)
  return (
    <div className='navbar'>
        <div className="navbarcontainer">
            <span className='logo'>pera palas</span>
            <div className="navitems">
               {
                  user ? <span className='logo'>{JSON.parse(localStorage.getItem("user")).username}</span>: <>
                   <button className="navbutton">Kayıt Ol</button>
                <Link to={"/login"}>
                <button className="navbutton">Giriş Yap</button></Link></>
               }
            </div>
        </div>
    </div>
  )
}

export default Navbar