import SideBar from '../nav-bar/side-bar.jsx';
import { Outlet } from 'react-router-dom';

function LayoutDashboard() {
  return (
    <>
      <SideBar />
      <main className='home-section'>
        <Outlet />
      </main>
    </>
  );
}

export default LayoutDashboard;
