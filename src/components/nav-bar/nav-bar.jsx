import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import "./nav-bar.css"

function NavBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
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
      </li>
    </ul>
  );
}

export default NavBar;
