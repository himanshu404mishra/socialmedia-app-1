import "./Posts.css"

import {PostsData} from "../../data/Posts"
import Post from "../Post/Post"

const Posts = () => {
  return (
    <div className="Posts">
{
  PostsData.map(post=>{
    return(
      <Post post={post} />
    )
  })
}


    </div>
  )
}

export default Posts