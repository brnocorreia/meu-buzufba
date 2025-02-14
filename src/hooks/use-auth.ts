import { useAtom } from "jotai";
import { userAtom } from "@/atoms/user";
import { User } from "@/@types/user";

export function useAuth() {
  const [user, setUser] = useAtom(userAtom);

  const login = (user: User) => {
    setUser(user);
  };

  const signup = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    signup,
  };
}
