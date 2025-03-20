import { IoMenu } from "react-icons/io5"
import PostSide from "../../Components/PostSide/PostSide"
import ProfileSide from "../../Components/ProfileSide/ProfileSide"
import "./Home.css"
const Home = () => {

  return (
    <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <div className="rightSide">RightSide</div>
    </div>
  )
}

export default Home