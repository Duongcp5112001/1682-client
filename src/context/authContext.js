import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie"

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(Cookies.get('token')) || null
  );

  useEffect(() => {
    Cookies.set('token', JSON.parse(Cookies.get('token')));
  }, [currentUser]);

  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  );
};