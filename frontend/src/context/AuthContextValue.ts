import { createContext } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<unknown>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

//basically definitions for the global context
