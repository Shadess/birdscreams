import {
  DocumentData,
  collection,
  doc,
  getDoc,
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
    const unsubscribe = onSnapshot(q, async (querySnapshot) => {
      const bareScreams = await Promise.all(
        querySnapshot.docs.map(async (sDoc) => {
          const userRef = doc(Firebase.db, 'users', sDoc.data().author_uid);
          const user = (await getDoc(userRef)).data();

          return {
            ...sDoc.data(),
            id: sDoc.id,
            author: user ? user.username : sDoc.data().author_uid,
          };
        }),
      );
      setScreams(bareScreams);
    });

    return unsubscribe;
  }, []);
  return (
    <>
      <div className="bg-slate-800 p-4">
        <h1 className="font-bold text-white uppercase">cloaca</h1>
      </div>

      {screams.map((scream) => (
        <div
          className="bg-slate-200 my-4 mx-2 p-4 rounded shadow-xl"
          key={scream.id}
        >
          <p>{scream.message}</p>
          <p className="mt-1 text-right">{scream.author}</p>
        </div>
      ))}
    </>
  );
}

export default Digestion;
