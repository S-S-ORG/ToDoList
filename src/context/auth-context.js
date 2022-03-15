import React from "react";
import { useContext, useState, createContext } from "react";

const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const logout = () => {
    setUser(false);
  };
  const providerValue = { user: user, setUser: setUser, logout: logout };
  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
