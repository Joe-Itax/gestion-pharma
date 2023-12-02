import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import './style-side-bar.css'
import profilImage from "../../assets/react.svg";

function SideBar() {
  const navigate = useNavigate();
  const handleClickDeconnexion = () => {
    navigate('/');
  };
  const [collapseDashboard, setCollapseDashboard] = useState(false);
  const [showSubMenuForCategory, setShowSubMenuForCategory] = useState(false);
  const [showSubMenuForPost, setShowSubMenuForPost] = useState(false);

  const handleClickMenuDashboard = () => {
    setCollapseDashboard(!collapseDashboard);
  };

  const handleClickShowSubMenuCategory = () => {
    setShowSubMenuForCategory(!showSubMenuForCategory);
  };

  const handleClickShowSubMenuPost = () => {
    setShowSubMenuForPost(!showSubMenuForPost);
  };

  return (
    <aside className={`sidebar${collapseDashboard ? " close" : ''}`}>
      <div className="logo-details">
        <i className="ri-edge-new-fill" />
        <span className="logo-name">Genius</span>
      </div>
      <ul className="nav-links">
        <li>
          <div className="sidebar-btn-container">
            <i className="ri-contract-left-line sidebar-btn" onClick={handleClickMenuDashboard} />
          </div>
        </li>
        <li>
          <NavLink to="#">
            <i className="ri-layout-grid-fill" />
            <span className="link-name">Dashboard</span>
          </NavLink>
          <ul className="sub-menu blank">
            <li>
              <NavLink className="link-name" to="#">
                Dashboard
              </NavLink>
            </li>
          </ul>
        </li>
        <li className={showSubMenuForCategory ? 'showMenu' : ''}>
          <div className="icon-link">
            <a to="#">
              <i className="ri-school-line" />
              <span className="link-name">Category</span>
            </a>
            <i className={`ri-arrow-down-s-line`} onClick={handleClickShowSubMenuCategory} />
          </div>
          <ul className="sub-menu">
            <li>
              <NavLink className="link-name" to="#">
                Category
              </NavLink>
            </li>
            <li>
              <NavLink to="#">Web design</NavLink>
            </li>
            <li>
              <NavLink to="#">Card design</NavLink>
            </li>
            <li>
              <NavLink to="#">Login form</NavLink>
            </li>
          </ul>
        </li>
        <li className={showSubMenuForPost ? 'showMenu' : ''}>
          <div className="icon-link">
            <NavLink to="#">
              <i className="ri-book-line" />
              <span className="link-name">Posts</span>
            </NavLink>
            <i className="ri-arrow-down-s-line" onClick={handleClickShowSubMenuPost} />
          </div>
          <ul className="sub-menu">
            <li>
              <NavLink className="link-name" to="#">
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink to="#">Réalisations</NavLink>
            </li>
            <li>
              <NavLink to="#">UI/UX design</NavLink>
            </li>
            <li>
              <NavLink to="#">Login form</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="#">
            <i className="ri-layout-grid-fill" />
            <span className="link-name">Dashboard</span>
          </NavLink>
          <ul className="sub-menu blank">
            <li>
              <NavLink className="link-name" to="#">
                Dashboard
              </NavLink>
            </li>
          </ul>
        </li>
        <li className={showSubMenuForCategory ? 'showMenu' : ''}>
          <div className="icon-link">
            <NavLink to="#">
              <i className="ri-school-line" />
              <span className="link-name">Category</span>
            </NavLink>
            <i className='ri-arrow-down-s-line' onClick={handleClickShowSubMenuCategory} />
          </div>
          <ul className="sub-menu">
            <li>
              <NavLink className="link-name" to="#">
                Category
              </NavLink>
            </li>
            <li>
              <NavLink to="#">Web design</NavLink>
            </li>
            <li>
              <NavLink to="#">Card design</NavLink>
            </li>
            <li>
              <NavLink to="#">Login form</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <div className="profil-details">
            <div className="profil-content">
              <img src={profilImage} alt="img" />
            </div>
            <div className="name-job">
              <div className="profile-name">Joseph Itax</div>
              <div className="job">Web developer</div>
            </div>
            <i className="ri-logout-box-line" onClick={handleClickDeconnexion} />
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;