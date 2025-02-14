import { useAtom } from "jotai";
import { userAtom } from "@/atoms/user";
import { LoginCredentials, SignupCredentials, User } from "@/@types/user";

export function useAuth() {
  const [user, setUser] = useAtom(userAtom);

  const login = async (credentials: LoginCredentials) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate validation
      if (
        credentials.email !== "test@example.com" ||
        credentials.password !== "password"
      ) {
        throw new Error("Invalid credentials");
      }

      const user: User = {
        id: "1",
        name: "Bruno Correia",
        email: credentials.email,
      };

      setUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const signup = async (credentials: SignupCredentials) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate validation
      if (credentials.email === "test@example.com") {
        throw new Error("Email already exists");
      }

      const user: User = {
        id: "1",
        name: `${credentials.name} ${credentials.lastName}`,
        email: credentials.email,
      };

      setUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };
}
