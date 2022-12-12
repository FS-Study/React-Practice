import classes from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={classes.signup}>
      <p className={classes.trial}>
        <span className={classes.bold}>Try it free 7 days </span>
        <span>then $20/mo.thereafter</span>
      </p>
      <form className={classes.auth}>
        <div>
          <input type="text" placeholder="First Name"></input>
        </div>
        <div>
          <input type="text" placeholder="Last Name"></input>
        </div>
        <div>
          <input type="email" placeholder="Email Address"></input>
        </div>
        <div>
          <input type="Password" placeholder="Password"></input>
        </div>
        <button>CLAIM YOUR FREE TRIAL</button>
        <div>
          <span className={classes.service}>
            By clicking the button, you are agreeing to our
          </span>
          <a href="/"> Terms of Service</a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
