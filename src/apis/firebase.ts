import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
};
import { User } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);

// to avoid automatic close the 3rd party login popup
provider.setCustomParameters({ prompt: 'select_account' });

// Login function
export const login = async () => {
  signInWithPopup(auth, provider).catch(console.error);
};

// log out
export const logout = () => {
  signOut(auth).catch(console.error);
};

export const onUserStateChange = (callback: (user: User | null) => void) => {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser: User | null = user ? await adminUser(user) : user;
    callback(updatedUser);
  });
};

const adminUser = async (user: User): Promise<User> => {
  return get(ref(database, 'admins'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admin = snapshot.val();
        const isAdmin: boolean = admin.includes(user.uid);
        return { ...user, isAdmin };
      }
      return;
    })
    .catch(console.error);
};
