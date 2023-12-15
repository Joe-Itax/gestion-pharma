import UserContext from '../context/UserContext';
import { useContext } from 'react';
function Home() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Welcome to Gestion Pharma</h1>
      <h2>{user.pseudo}</h2>
    </>
  );
}

export default Home;
