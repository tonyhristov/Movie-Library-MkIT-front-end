import React, { useState } from "react";
import UserContext from "./context";

const App = (props) => {
  const [user, setUser] = useState(null);

  const logIn = (user) => {
    setUser({ ...user, loggedIn: true });
  };

  const logout = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    setUser({ loggedIn: false });
  };

  return (
    <UserContext.Provider value={{ user, logIn, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default App;