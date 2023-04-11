import React, {
  createContext,
  useState,
  useContext,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export function UserContextProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);
  const [cartId, setCartId] = useState(localStorage.getItem('cartId') || null);

  const values = useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
      userId,
      setUserId,
      cartId,
      setCartId,
    }),
    [
      email,
      setEmail,
      password,
      setPassword,
      userId,
      setUserId,
      cartId,
      setCartId,
    ],
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
