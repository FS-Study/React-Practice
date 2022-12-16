import Description from "./Description";
import classes from "./Main.module.css";
import SignUp from "./SignUp";

const Main = (props) => {
  return (
    <div className={classes.main}>
      <Description />
      <SignUp
        onShowTerm={props.onShowTerm}
        onShowLoginResult={props.onShowLoginResult}
      />
    </div>
  );
};

export default Main;
