import { User, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase-config";

// interface AuthUser {
//   displayName: string | null;
//   photoUrl: string | null;
//   uid: string;
// }

interface IAuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({} as User | null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setUser(user);
      } else {
        setUser(null);
      }

      return () => unSubscribe();
    });
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
