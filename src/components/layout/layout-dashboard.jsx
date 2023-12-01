import NavBar from '../nav-bar/nav-bar';
import SideBar from '../nav-bar/side-bar';
import { Outlet } from 'react-router-dom';

function LayoutDashboard() {
  return (
    <>
      <nav>
        <SideBar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default LayoutDashboard;
