import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get, set } from 'firebase/database';

import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
};
import { User } from 'firebase/auth';
import { ExtendedUser } from '../service/types/type';

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
    const updatedUser: ExtendedUser | null = user
      ? await adminUser(user)
      : null;
    callback(updatedUser);
  });
};

// Check is admin? () => return isAdmin:true | false
const adminUser = async (user: User): Promise<ExtendedUser> => {
  return get(ref(database, 'admins'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admin = snapshot.val();
        const isAdmin: boolean = admin.includes(user.uid);
        // return isAdmin:true
        return { ...user, isAdmin };
      }
      // if there's error or problem return just user
      return user;
    })
    .catch(console.error);
};

export const addNewProduct = async (product: {}, imgURL: string) => {
  // make a product id via uuid
  const id = uuid();

  // upload a new product into the firebase database
  set(ref(database, `products/${id}`), {
    ...product,
    id,
    image: imgURL,
    price: parseInt(product.price),
  });
};
