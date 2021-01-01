import React from "react";
import { Redirect } from "react-router-dom";
// import styles from "./Login.module.css"


import { DataContext } from "../Context/DataContextProvider";

const inputBox = {
  margin: "10px 30px",
  border: "1px solid grey",
  height: "30px",
  width: "80%",
  padding: "10px",
};
const box = {
  margin: "30px 36% 30px 37%",
  borderRadius: "5px",
  height: "auto",
  width: "26%",
  backgroundColor: "white",
  paddingBottom: "30px",
};
const btn = {
  margin: "18px 0px 0px 30px",
  height: "40px",
  width: "85%",
  border: "1px solid #04724d",
  backgroundColor: "#04724d",
  color: "white",
  fontSize: "20px",
};
const fb = {
  margin: "0px 0px 10px 30px",
  height: "40px",
  width: "85%",
  border: "1px solid #3f37c9",
  backgroundColor: "#3f37c9",
  color: "white",
  fontSize: "17px",
};

const apple = {
  margin: "15px 30px",
  height: "40px",
  width: "85%",
  border: "1px solid black",
  backgroundColor: "black",
  borderRadius: "5px",
  color: "white",
  fontSize: "20px",
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });

    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { authenticateUser } = this.context;
    const { email, password } = this.state;
    authenticateUser({ email, password });
  };

  render() {
    const { email, password } = this.state;
    const { isAuth, isLoading, error } = this.context;
    return isLoading ? (
      <h2>..Loading</h2>
    ) : !isAuth ? (
      <div
        style={{
          height: "auto",
          width: "100%",
          backgroundColor: "#f5efff",
          padding: "30px 0px",
        }}
      >
        <div style={box}>
          <h1
            style={{
              textAlign: "left",
              marginLeft: "30px",
              paddingTop: "20px",
            }}
          >
            Log in
          </h1>
          <input
            style={inputBox}
            type="text"
            value={email}
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <br />
          <input
            style={inputBox}
            type="text"
            value={password}
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <br />
          <a
            style={{
              textDecoration: "none",
              marginLeft: "30px",
              fontSize: "13px",
            }}
            href="google.com"
          >
            Forget your password?
          </a>
          <button style={btn} onClick={this.handleClick}>
            Log in
          </button>
          {error &&
            alert("The email address and password you entered do not match.")
            // <h5 style={{ textAlign: "center" }}>Invalid credentials</h5>
          }
          {/* <input type="checkbox" value="Remember me" ckecked /> */}
          <p style={{ textAlign: "center" }}>or</p>
          <button style={apple} onClick={this.handleClick}>
            Sign in with Apple
          </button>
          <button style={fb} onClick={this.handleClick}>
            Continue with Facebook
          </button>
          <p
            style={{
              margin: "0px 30px",
              fontSize: "13px",
              textEmphasis: "GrayText",
            }}
          >
            Get notified when your friends back and launch projects. We'll never
            post anything on Facebook without your permission.
          </p>
          <a
            style={{
              textDecoration: "none",
              marginLeft: "30px",
              fontSize: "16px",
            }}
            href="google.com"
          >
            Read more
          </a>
          <p style={{ textAlign: "center", marginTop: "25px" }}>
            New to Kickstarter?{" "}
            <a style={{ textDecoration: "none" }} href="google">
              Sign up
            </a>{" "}
          </p>
          <p
            style={{
              margin: "30px 0px 0px 30px",
              fontSize: "13px",
              color: "Gray",
            }}
          >
            This site is protected by reCAPTCHA and the Google{" "}
            <a style={{ textDecoration: "none" }} href="google">
              Privacy
            </a>{" "}
            <a style={{ textDecoration: "none" }} href="google">
              Policy
            </a>{" "}
            and{" "}
            <a style={{ textDecoration: "none" }} href="google">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    ) : (
      //   <Redirect to="/Pages/Dashboard" />
      <Redirect to="/home" />
    );
  }
}
Login.contextType = DataContext;
export default Login;
