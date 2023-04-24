/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  DocumentData,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import 'material-icons/iconfont/filled.css';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/user.context';
import { Firebase } from '../../utilities/firebase';

function Profile() {
  const authUser = useContext(UserContext);

  const [showUsernameInput, setShowUsernameInput] = useState(false);
  const [user, setUser] = useState<DocumentData | undefined>(undefined);
  const [userDocExists, setUserDocExists] = useState(false);
  const [userNameInput, setuserNameInput] = useState<string>('');

  useEffect(() => {
    const sub = onSnapshot(
      doc(Firebase.db, 'users', authUser!.uid),
      (document) => {
        setUser(document.data());
      },
    );
    return sub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDocExists]);

  if (!authUser) return null;

  return (
    <>
      <button
        className="bg-Primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={async () => {
          await Firebase.signOut();
        }}
        type="button"
      >
        Log Out
      </button>

      <div className="justify-center flex">
        <div className="bg-slate-400 border-2 border-black rounded-full">
          <span className="material-icons text-7xl">person</span>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {showUsernameInput ? (
          <input
            onBlur={async () => {
              if (!user) {
                await setDoc(doc(Firebase.db, 'users', authUser.uid), {
                  email: authUser.email,
                  username: userNameInput,
                  userId: authUser.uid,
                });
                setUserDocExists(true);
              } else {
                const userDoc = doc(Firebase.db, 'users', authUser.uid);
                await updateDoc(userDoc, {
                  username: userNameInput,
                });
              }

              setShowUsernameInput(false);
            }}
            onChange={(e) => setuserNameInput(e.target.value)}
            type="text"
            value={userNameInput}
          />
        ) : (
          <p onClick={() => setShowUsernameInput(true)}>
            {user?.username || authUser?.uid}
          </p>
        )}
      </div>
    </>
  );
}

export default Profile;
