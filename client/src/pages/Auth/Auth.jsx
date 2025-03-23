import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../assets/img/logo.png";
import {useDispatch} from "react-redux"
import {logIn, signUp} from "../../features/auth/authSlice"

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const dispatch = useDispatch()


    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpassword: "",
    });

    const [confirmpassword, setConfirmpassword] = useState(true);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignUp){
            if(data.password !== data.confirmpassword){

                setConfirmpassword(false)
            }else{
                dispatch(signUp(data))
            }
        }else{
            dispatch(logIn(data))
        }
    }

    const resetForm = () => {
        setConfirmpassword(true)
        setData({
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmpassword: "",
        })
    }

    return (
        <div className="Auth">
            {/* left side */}

            <div className="a-left">
                <img src={Logo} alt="" />

                <div className="Webname">
                    <h1>ZKC Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            {/* right form side */}

            <div className="a-right">
                <form className="infoForm authForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Register" : "Login"}</h3>
                    {isSignUp && (
                        <div>
                            <input
                                required
                                type="text"
                                placeholder="First Name"
                                className="infoInput"
                                name="firstname"
                                onChange={handleChange}
                                value={data.firstname}
                            />
                            <input
                                required
                                type="text"
                                placeholder="Last Name"
                                className="infoInput"
                                name="lastname"
                                onChange={handleChange}
                                value={data.lastname}
                            />
                        </div>
                    )}

                    <div>
                        <input
                            required
                            type="text"
                            placeholder="Username"
                            className="infoInput"
                            name="username"
                            onChange={handleChange}
                            value={data.username}
                        />
                    </div>
                    <div>
                        <input
                            required
                            type="password"
                            className="infoInput"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}

                        />
                        {isSignUp && (
                            <input
                                required
                                type="password"
                                className="infoInput"
                                name="confirmpassword"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                value={data.confirmpassword}
                            />
                        )}
                    </div>
                    <span
                        style={{ display: confirmpassword ? "none" : "block", color:"red", fontSize:"12px", alignSelf:"flex-end", marginRight:"5px" }}
                    >
                        * Confirm Password is not same
                    </span>
                    <div>
                        <span
                            style={{
                                fontSize: "12px",
                                cursor: "pointer",
                                textDecoration: "underline",
                            }}
                            onClick={() => {
                                setIsSignUp((prev) => !prev);
                                resetForm()
                            }}
                        >
                            {isSignUp
                                ? "Already have an account? Login!"
                                : "Don't have an account? Sign up!"}
                        </span>
                        <button className="button infoButton" type="Submit">
                            {isSignUp ? "SignUp" : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
