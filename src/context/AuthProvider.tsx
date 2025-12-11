import { createContext, useState } from "react";
import type { User } from "../types";
import apiClient from "../clients/api";

interface AuthContextType {
  user: User | null;
  setUser: (user: User) => void;
  logIn: (username: string, password: string) => void;
  register: (username: string, email: string, password: string) => void;
  logOut: () => void;
  token: string | null;
  setToken: (token: string) => void;
  loading: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
 
  const [user, setUser] = useState<User | null>(() => {
    try {
      const value = localStorage.getItem("user");
      if (value) {
        return JSON.parse(value);
      } else return null;
    } catch (error) {
      console.error(error);
    }
  });

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('token');
    // try {
    //   const value = localStorage.getItem("token");
    //   if (value) {
    //     return JSON.parse(value);
    //   } else return null;
    // } catch (error) {
    //   console.error(error);
    // }
  });

  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   try {

  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  const logIn = async (email: string, password: string) => {
    setLoading(true);
    try {
        const res = await apiClient.post('api/users/login', {email, password});

        const { token: newToken, user: newUser } = res.data;

        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(newUser));

        setToken(newToken);
        setUser(newUser);

    } catch (error) {
        
    } finally {
        setLoading(false);
    }
  };

  const register = async (username: string, email: string, password: string) => {
    setLoading(true);
    try {
        await apiClient.post('api/users/register', { username, email, password});

    } catch (error) {
        
    } finally {
        setLoading(false);
    }

  };

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('users');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, logIn, register, logOut, token, setToken, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}