import Description from "./Description";
import classes from "./Main.module.css";
import SignUp from "./SignUp";

const Main = (props) => {
  return (
    <div className={classes.main}>
      <Description />
      <SignUp
        unShowTerm={props.unShowTerm}
        unShowLoginResult={props.unShowLoginResult}
      />
    </div>
  );
};

export default Main;
