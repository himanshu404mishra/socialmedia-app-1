import "./Post.css"
import Comment from "../../assets/img/comment.png"
import Share from "../../assets/img/share.png"
import Heart from "../../assets/img/like.png"
import NotLike from "../../assets/img/notLike.png"

const Post = ({post}) => {
  return (
    <div className="Post">
        <img src={post.img} alt="" />

        <div className="postReact">
            <img src={post.liked ? Heart : NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>

        <span style={{color:"var(--gray)", fontSize:"12px"}}>{post.likes} likes</span>
        <div className="details">
            <span><b>{post.name}</b></span>
            <span> {post.desc}</span>
        </div>
    </div>
  )
}

export default Post