import { createContext } from "react";
import useAuth from "../hooks/useAuth";

//context
export const AuthContext = createContext(null);

//provider
export function AuthProvider({ children }) {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
