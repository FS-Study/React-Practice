import classes from "./Description.module.css";

const Description = () => {
  return (
    <div className={classes.description}>
      <h1>
        Learn to code by <br /> watching others
      </h1>
      <h5>
        See how experienced developers solve problems in real-time.
        <br />
        Watching scripted tutorials is great, but understanding how
        <br />
        developers thinks is invaluable.
      </h5>
    </div>
  );
};

export default Description;
