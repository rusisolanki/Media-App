import { useState } from "react";
import classes from "./Login.module.css";
// import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";

const Login = () => {
  // const [phoneNumber, setPhoneNumber] = useState();
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(phoneNumber);
  //   // localStorage.setItem('number', phoneNumber)
  // };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <h2>Sign In</h2>
        <p>
          Please enter your email and password to login.
        </p>
        <form>
          {/* <PhoneInput
            country={"in"}
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e)}
          /> */}
          <div className={classes.input}>
            <input type="email" name="email" id="email" placeholder="Enter your Email"/>
          </div>
          <div className={classes.input}>
            <input type="password" name="password" id="password" placeholder="Enter your Password"/>
          </div>
          <Link to="/main">
            {" "}
            <button className={classes.btn}>Sign In</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
