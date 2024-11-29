import { NavLink } from 'react-router';

function NavTabs() {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => 
                            isActive ? "active-link" : ""
                        }
                        id='about'
                        end
                    >
                        about
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/portfolio'
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                        id='portfolio'
                    >
                        portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                        id='contact'
                    >
                        contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/resume'
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                        id='resume'
                    >
                        resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavTabs;