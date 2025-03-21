import React from "react";
import "./Auth.css";
import Logo from "../../assets/img/logo.png";

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>JutaMar Media</h1>
                    <h6>
                        Explore the ideas throughtout the world <br /> by JUTTA
                        maring and Khaing...
                    </h6>
                </div>
            </div>

            {/* <SignUp /> */}
            <LogIn/>
        </div>
    );
};

function LogIn() {
    return (
        <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
}


function SignUp() {
    return (
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Sign up</h3>
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="infoInput"
                            name="firstName"
                        />
                        <input
                            type="text"
                            name="lastName"
                            className="infoInput"
                            placeholder="Last Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            className="infoInput"
                            name="username"
                        />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" name="password" className="infoInput" />
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" className="infoInput" />
                    </div>

                    <div>
                        <span style={{fontSize:"12px"}}>Already Have an account? Login!</span>
                    </div>
                    <button className="button infoBbutton" type="submit">
                        Signup
                    </button>
            </form>
        </div>
    );
}

export default Auth;
