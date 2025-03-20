import React from 'react'
import "./ProfileCard.css"
import Cover from "../../assets/img/cover.jpg"
import Profile from "../../assets/img/profileImg.jpg"

const ProfileCard = () => {
  return (
    <div className='ProfileCard'
    >
        <div className="profileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>

        <div className="profileName">
          <span>KhubShurat Mahila</span>
          <span>Senior UI/UX Designer</span>
        </div>

        <div className="followStatus">
          <hr />
          <div>
            <div className='follow'>
              <span>1</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            
            <div className='follow'>
              <span>6,800</span>
              <span>Followers</span>
            </div>
          </div>
          <hr />
        </div>

        <span>
          My Profile
        </span>
    </div>
  )
}

export default ProfileCard