import "./PostShare.css";
import { useState, useRef } from "react";
import { FaRegImage } from "react-icons/fa6";
import { MdSlowMotionVideo } from "react-icons/md";
import { IoCloseSharp, IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import ProfileImage from "../../assets/img/profileImg.jpg";

const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };
    return (
        <div className="PostShare">
            <img src={ProfileImage} alt="" />

            <div>
                <input type="text" placeholder="What's Happening" />

                <div className="postOptions">
                    <div
                        className="option"
                        style={{ color: "var( --photo)" }}
                        onClick={() => {
                            imageRef.current.click();
                        }}
                    >
                        <FaRegImage style={{ fontSize: "25px" }} />
                        Photo
                    </div>
                    <div className="option" style={{ color: "var( --video)" }}>
                        <MdSlowMotionVideo style={{ fontSize: "25px" }} />
                        Video
                    </div>
                    <div
                        className="option"
                        style={{ color: "var( --location)" }}
                    >
                        <IoLocationOutline style={{ fontSize: "25px" }} />
                        Location
                    </div>
                    <div
                        className="option"
                        style={{ color: "var( --shedule)" }}
                    >
                        <SlCalender style={{ fontSize: "25px" }} />
                        Schedule
                    </div>
                    <button className="button ps-button">Share</button>
                    <div style={{ display: "none" }}>
                        <input
                            type="file"
                            name="myImage"
                            ref={imageRef}
                            onChange={onImageChange}
                            accept="image/png, image/gif, image/jpeg"
                        />
                    </div>
                </div>

                {image && (
                    <div className="previewImage">
                        <IoCloseSharp style={{fontSize:"25px", cursor:"pointer"}} onClick={function(){
                            setImage(null)
                        }} />
                        <img src={image.image} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostShare;
