import { IoMenu } from "react-icons/io5"
import PostSide from "../../Components/PostSide/PostSide"
import ProfileSide from "../../Components/ProfileSide/ProfileSide"
import "./Home.css"
import RightSide from "../../Components/RightSide/RightSide"
const Home = () => {

  return (
    <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home