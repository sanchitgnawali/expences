import { useState } from "react";
import { firebaseAuth } from "./../firebase/config";
import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
  const [error, setError] = useState(error);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await firebaseAuth.signOut();
      dispatch({ type: "LOGOUT" });
      setIsPending(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, logout };
};
