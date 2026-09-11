import { useEffect, useState, type ReactNode } from "react";
import api from "../services/api";
import { AuthContext, type AuthContextType } from "./AuthContextValue";

interface AuthProviderProps {
  children: ReactNode; //telling typescript that children can be react stuff
}

export function AuthProvider({ children }: AuthProviderProps) {
  //Manage authentication and provide authentication information to the rest of the application.
  const [user, setUser] = useState<AuthContextType["user"]>(null); //user = currently logged-in user, initially user = null ;because nobody has been confirmed as logged in yet. then setuser.. changes it
  const [loading, setLoading] = useState(true); //because nobody has been confirmed as logged in yet.

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await api.get("/auth/me");
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getCurrentUser();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    setUser(response.data.user);
  };

  const logout = async () => {
    await api.post("/auth/logout");

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

//manager on controlling whats inside the box

//Context = shared state.
//Provider = supplies/manages that state.
//Custom hook = convenient way for components to access it.
