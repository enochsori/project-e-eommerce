import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { login, logout, onUserStateChange } from '../apis/firebase';
import { ExtendedUser } from '../service/types/type';

type ContextProviderPops = {
  children: ReactNode;
};

type ModalType = {
  message: string;
  status: boolean;
};

type AuthContextValue = {
  user: ExtendedUser | null;
  login: () => void;
  logout: () => void;
  modal: ModalType;
  setModal: React.Dispatch<React.SetStateAction<ModalType>>;
};

const contextInitialValue = {
  user: null,
  login,
  logout,
  modal: { message: '', status: false },
  setModal: () => {},
};

export const AuthContext = createContext<AuthContextValue>(contextInitialValue);

export default function AuthContextProvider({ children }: ContextProviderPops) {
  const [user, setUser] = useState<ExtendedUser | null>(null);
  const [modal, setModal] = useState<ModalType>({ message: '', status: false });

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, modal, setModal }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};
