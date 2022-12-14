import classes from "./SignUp.module.css";
import { useRef, useContext } from "react";
import LoginContext from "../../store/login-context";

const SignUp = (props) => {
  const termHandler = (event) => {
    event.preventDefault();
    props.unShowTerm();
  };
  const loginResultHandler = (event) => {
    event.preventDefault();
    props.unShowLoginResult();
  };
  const fisrtNameRef = useRef();
  const lastNameRef = useRef();
  const emailAddressRef = useRef();
  const passwordRef = useRef();
  const userCtx = useContext(LoginContext);
  const showUserHandler = (event) => {
    userCtx.showUser({
      firstName: "하이",
      lastName: lastNameRef.current.value,
      emailAddress: emailAddressRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className={classes.signup}>
      <p className={classes.trial}>
        <span className={classes.bold}>Try it free 7 days </span>
        <span>then $20/mo.thereafter</span>
      </p>
      <form onSubmit={showUserHandler} className={classes.auth}>
        <div>
          <input
            ref={fisrtNameRef}
            type="text"
            placeholder="First Name"
          ></input>
        </div>
        <div>
          <input ref={lastNameRef} type="text" placeholder="Last Name"></input>
        </div>
        <div>
          <input
            ref={emailAddressRef}
            type="email"
            placeholder="Email Address"
          ></input>
        </div>
        <div>
          <input
            ref={passwordRef}
            type="Password"
            placeholder="Password"
          ></input>
        </div>
        <button onClick={loginResultHandler}>CLAIM YOUR FREE TRIAL</button>
        <div>
          <span className={classes.service}>
            By clicking the button, you are agreeing to our
          </span>
          <button onClick={termHandler}> Terms of Service</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
