import React from "react";
import "./RightSide.css";

import Home from "../../assets/img/home.png";
import Noti from "../../assets/img/noti.png";
import Comment from "../../assets/img/comment.png";
import { FiSettings } from "react-icons/fi";
import TrendCard from "../TrendCard/TrendCard";

const RightSide = () => {
    return (
        <div className="RightSide">
            <div className="navIcons">
                <img src={Home} alt="" />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
                <FiSettings style={{fontSize:"25px"}} />
            </div>

            <TrendCard/>
            <div className="button r-button">
                Share
            </div>
        </div>
    );
};

export default RightSide;
