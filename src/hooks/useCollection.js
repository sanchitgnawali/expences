import { useEffect, useState } from "react";
import { fireStore } from "../firebase/config";

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = fireStore.collection(collection);

    const unsubs = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        //update the state
        setDocuments(results);
      },
      (error) => {
        console.log(error);
        setError(error);
      }
    );

    return () => unsubs();
  }, [collection]);

  return { documents, error };
};
