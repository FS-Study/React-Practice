import { useReducer } from "react";
import LoginContext from "./login-context";

const defaultUserDataState = {
  userData: [],
};

const userReducer = (state, action) => {
  if (action.type === "SHOW") {
    console.log(action.user);
    return {
      userData: {
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        emailAddress: action.user.emailAddress,
        password: action.user.password,
      },
    };
  }
  return state;
};

const LoginProvider = (props) => {
  const [userDataState, dispatch] = useReducer(
    userReducer,
    defaultUserDataState
  );
  const showUserDataHandler = (user) => {
    dispatch({ type: "SHOW", user: user });
  };
  const loginContext = {
    userData: userDataState.userData,
    showUser: showUserDataHandler,
  };
  return (
    <LoginContext.Provider value={loginContext}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
