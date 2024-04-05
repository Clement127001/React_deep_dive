import { createContext, useState } from "react";

const defaultValue = {
  userInfo: {},
  loginUser: () => {},
  logoutUser: () => {},
};
const LoginContext = createContext(defaultValue);

const LoginProvider = ({ children }) => {
  //we have to maintain the state and define all the functions
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const loginUserHandler = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logoutUserHanlder = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const authCtx = {
    userInfo: user,
    loginUser: loginUserHandler,
    logoutUser: logoutUserHanlder,
  };

  return (
    <LoginContext.Provider value={authCtx}>{children}</LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
