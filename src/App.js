import { useState } from "react";
import Main from "./components/Main/Main";
import TermCondition from "../src/components/TermCondition/TermCondition";
import LoginProvider from "./store/LoginProvider";
import LoginResult from "./components/LoginResult/LoginResult";

function App() {
  const [termIsShown, setTermIsShown] = useState(false);
  const [loginResultIsShown, setLoginResultIsShown] = useState(false);

  const showTermHandler = () => {
    termIsShown === true ? setTermIsShown(false) : setTermIsShown(true);
  };

  const showLoginResultHandler = () => {
    loginResultIsShown === true
      ? setLoginResultIsShown(false)
      : setLoginResultIsShown(true);
  };

  return (
    <LoginProvider>
      {termIsShown && <TermCondition onClose={showTermHandler} />}
      {loginResultIsShown && <LoginResult onClose={showLoginResultHandler} />}
      <Main
        unShowTerm={showTermHandler}
        unShowLoginResult={showLoginResultHandler}
      />
    </LoginProvider>
  );
}

export default App;
