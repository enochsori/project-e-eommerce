import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { login, logout, onUserStateChange } from '../apis/firebase';
import { ExtendedUser } from '../service/types/type';

type AuthContextValue = {
  user: ExtendedUser | null;
  login: () => void;
  logout: () => void;
};

type ContextProviderPops = {
  children: ReactNode;
};
const AuthContext = createContext<AuthContextValue>({
  user: null,
  login,
  logout,
});

export default function AuthContextProvider({ children }: ContextProviderPops) {
  const [user, setUser] = useState<ExtendedUser | null>(null);

  useEffect(() => {
    onUserStateChange((user) => {
      // console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};
