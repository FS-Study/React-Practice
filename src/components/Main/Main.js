import Description from "./Description";
import classes from "./Main.module.css";
import SignUp from "./SignUp";

const Main = () => {
  return (
    <div className={classes.main}>
      <Description />
      <SignUp />
    </div>
  );
};

export default Main;
