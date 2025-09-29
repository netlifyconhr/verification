// context/AuthContext.tsx
import { tokenKey } from "@/constant/api";
import axiosInstance from "@/lib/axios-instance";
import { useQuery } from "@tanstack/react-query";
import { createContext, type ReactNode, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  logout: () => void;
  resetUser(user: User): void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    localStorage.removeItem(tokenKey);
    setUser(null);
    location.href = "/auth";
  };
  const token = localStorage.getItem(tokenKey);
  const { isFetching } = useQuery({
    queryKey: ["USER"],
    queryFn: () => {
      try {
        return axiosInstance.get("/user/me").then((res) => {
          setUser(res?.data?.data);
        });
      } catch (_) {
        location.href = "/auth";
      }
    },
    enabled: !!token,
  });

  function resetUser(user: User) {
    setUser(user);
  }
  return (
    <AuthContext.Provider value={{ user, resetUser, logout }}>
      {isFetching ? <p>Loading.....</p> : children}
    </AuthContext.Provider>
  );
};
