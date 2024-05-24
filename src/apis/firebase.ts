import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get, set, remove } from 'firebase/database';

import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
};
import { User } from 'firebase/auth';
import {
  ExtendedUser,
  NewProductFormData,
  ProductType,
  UpdateCartProduct,
} from '../service/types/type';

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

export const addNewProduct = async (
  product: NewProductFormData,
  imgURL: string
) => {
  // make a product id via uuid
  const id = uuid();

  // upload a new product into the firebase database
  set(ref(database, `products/${id}`), {
    ...product,
    id,
    image: imgURL,
    price: product.price,
  });
};

// to get products
export const getProducts = async (): Promise<ProductType[] | []> => {
  return get(ref(database, 'products')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
};

// to get carts info based on user id
export const getCart = async (userId: string) => {
  return get(ref(database, `carts/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items as UpdateCartProduct[]);
    });
};

// add or update cart based on user id and product
export const addOrUpdateCart = async (
  userId: string,
  product: UpdateCartProduct
) => {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
};

// remove product from cart
export const removeFromCart = async (userId: string, productId: string) => {
  return remove(ref(database, `carts/${userId}/${productId}`));
};
