import { useEffect, useRef, useState } from "react";
import { fireStore } from "../firebase/config";

export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const query = useRef(_query).current;

  useEffect(() => {
    let ref = fireStore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }

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
  }, [collection, query]);

  return { documents, error };
};
