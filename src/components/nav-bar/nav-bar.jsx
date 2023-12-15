import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './nav-bar.css';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

function NavBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  const userPseudo = useContext(UserContext);
  return (
    <ul>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/about">A Propos</NavLink>
      </li>
      <li>
        <button className="deconnexion" onClick={handleClick}>
          Deconnexion
        </button>
        <button className="deconnexion">{userPseudo.pseudo}</button>
      </li>
    </ul>
  );
}

export default NavBar;
