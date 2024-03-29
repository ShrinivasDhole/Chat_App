import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState();

  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const success = handleInputErrors(username, password);
    if (!success) return;
    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      let data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      //LocalStorage
      localStorage.setItem("chat-user", JSON.stringify(data));

      //Context
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

const handleInputErrors = (username, password) => {
  if (!username || !password) {
    toast.error("Please fill all the field");
    return false;
  }
  return true;
};
