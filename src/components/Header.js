import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Space Travelers&apos; Hub</h1>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active link' : 'pending link')}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="missions" className="link">
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="profile" className="link profile-link">
              My profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
