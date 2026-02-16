
import { createContext } from "react";

export const UserContext = createContext();

const userProvider = ({children})=>{
  const name = "sakshi"

  return (
    <UserContext.Provider value={name}>
      {children}
    </UserContext.Provider>
  );

}
