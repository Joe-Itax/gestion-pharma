import { createContext } from 'react';

const UserContext = createContext({
  isLogged: false,
  pseudo: null,
});

export default UserContext;
