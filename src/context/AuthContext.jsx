"use client";

import { MeAuth } from "@/actions/MeAction";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    const checkUserLoggedIn = async () => {
      const data = await MeAuth();
      if (cancelled) return;
      setUser(data?.error ? null : (data?.user ?? null));
    };

    checkUserLoggedIn();
    return () => {
      cancelled = true;
    };
  }, [pathname]); // re-check whenever the route changes

  const loginContext = (user) => setUser(user);
  const logoutContext = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, loginContext, logoutContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
