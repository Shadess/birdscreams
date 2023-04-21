import {
  DocumentData,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Firebase } from '../../utilities/firebase';

function Digestion() {
  const [screams, setScreams] = useState<DocumentData[]>([]);

  useEffect(() => {
    const q = query(
      collection(Firebase.db, 'screams'),
      orderBy('date', 'desc'),
      limit(100),
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setScreams(querySnapshot.docs.map((doc) => doc.data()));
    });

    return unsubscribe;
  }, []);
  return (
    <>
      <div className="bg-slate-800 p-4">
        <h1 className="font-bold text-white uppercase">cloaca</h1>
      </div>

      {screams.map((scream) => (
        <div className="bg-slate-200 my-4 mx-2 p-4 rounded shadow-xl">
          <p>{scream.message}</p>
        </div>
      ))}
    </>
  );
}

export default Digestion;
