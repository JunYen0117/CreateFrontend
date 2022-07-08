import { useState, useEffect, useContext, createContext } from 'react';
import { API_URL } from './config';
import axios from 'axios';

export const LoginContext = createContext(null);

export function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    userID: '',
  });

  useEffect(() => {
    (async () => {
      try {
        const checkLogin = await axios.get(API_URL + '/member/info', {
          withCredentials: true,
        });
        setIsLogin(true);
        setUser({
          userID: checkLogin.data.customer.id,
        });
      } catch (e) {
        setUser({
          userID: '',
        });
        console.error('尚未登入');
      }
    })();
  }, [isLogin]);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin, user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);
