import React from 'react'
import Logo from "../../assets/img/logo.png"
import { BiSearchAlt } from "react-icons/bi";
import "./LogoSearch.css"

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        <img src={Logo} alt="" />
        <div className="search">
            <input type="text" placeholder='#Explore' />
            <div className="s-icon">
                <BiSearchAlt style={{fontSize:"25px"}} />
            </div>
        </div>
    </div>
  )
}

export default LogoSearch