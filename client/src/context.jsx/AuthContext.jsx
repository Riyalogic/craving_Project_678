import React, { useEffect, useState } from "react";

const AuthContext = React.createContext;

const AuthProvider = () => {
  const [user, setUser] = useState();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // if (user) {
    //   setIsLogin(true);
    // } else {
    //   setIsLogin(false);
    // }
    setIsLogin(!!user)
  }, [user]);

  const value = {
    user,
    setUser,
    
  }
};
