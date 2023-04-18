import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Auth,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
} from 'firebase/auth';

export class Firebase {
  public static app: FirebaseApp;

  public static auth: Auth;

  public static user: User | null;

  static init() {
    Firebase.app = initializeApp({
      apiKey: 'AIzaSyArqMpVbl-XTJD4InTLAC-cWNMjd_eOrSw',
      authDomain: 'birdscreams-b1657.firebaseapp.com',
      projectId: 'birdscreams-b1657',
      storageBucket: 'birdscreams-b1657.appspot.com',
      messagingSenderId: '430644090450',
      appId: '1:430644090450:web:bac822d9af3ccd10e4f18b',
      measurementId: 'G-CR48ZKVN6Z',
    });

    Firebase.auth = getAuth(Firebase.app);
  }

  static async createUser(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(Firebase.auth, email, password);
      return null;
    } catch (error) {
      return error;
    }
  }

  static async signOut() {
    await signOut(Firebase.auth);
  }
}

export default {};
