import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { UserContext } from './contexts/user.context';
import BirdRouter from './router/BirdRouter';
import { Firebase } from './utilities/firebase';

Firebase.init();

function App() {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);

  useEffect(() => {
    const onFirebaseAuthLoaded = new Promise((resolve) => {
      onAuthStateChanged(Firebase.auth, (newFirebaseUser) => {
        setFirebaseUser(newFirebaseUser);
        resolve(newFirebaseUser);
      });
    });

    const prepare = async () => {
      await onFirebaseAuthLoaded;
    };

    prepare();
  }, []);

  return (
    <UserContext.Provider value={firebaseUser}>
      <BirdRouter />
    </UserContext.Provider>
  );
}

export default App;
