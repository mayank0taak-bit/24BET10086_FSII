import { createContext } from "react";
export const UserContext = createContext();
export function UserProvider({ children, user }) {
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
