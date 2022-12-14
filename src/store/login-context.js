import React from "react";

const LoginContext = React.createContext({
  userData: [],
  showUser: (user) => {},
});

export default LoginContext;
