import { useState } from "react";
import { firebaseAuth } from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);

      if (!response) {
        throw new Error("Couldn't sign the user up");
      }

      //add display name to user
      await response.user.updateProfile({ displayName });
      setIsPending(false);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { isPending, error, signup };
};
