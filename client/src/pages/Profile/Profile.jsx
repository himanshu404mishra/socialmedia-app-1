import React from 'react'
import "./Profile.css"
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft'
import ProfileCard from "../../Components/ProfileCard/ProfileCard"
import PostSide from "../../Components/PostSide/PostSide"
import RightSide from "../../Components/RightSide/RightSide"

const Profile = () => {
  return (
    <div className='Profile'>
        <ProfileLeft/>
        <div className="profile-center">
            <ProfileCard/>
            <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile