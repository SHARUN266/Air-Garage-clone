import React from "react";
import { useState } from "react";

export const AppContext=React.createContext();
function AppContextProvider({children}) {
  const [isAuth,setIsAuth]=useState(false)
  const [token,setToken]=useState(null)
  const loginUser=(token)=>{
    setIsAuth(true)
    setToken(token)
  }
  const logOutUser=()=>{
    setIsAuth(false)
    setToken(null)
  }
   return (
    <AppContext.Provider value={{isAuth,loginUser,logOutUser,token}}>
        {children}
    </AppContext.Provider>
   )

}

export default AppContextProvider;
