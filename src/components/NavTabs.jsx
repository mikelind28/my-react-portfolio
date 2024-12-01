import { NavLink } from 'react-router';
import { useEffect } from 'react';

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
                        onClick={() => document.title="Mike Lind | About"}
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
                        onClick={() => document.title="Mike Lind | Portfolio"}
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
                        onClick={() => document.title="Mike Lind | Contact"}
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
                        onClick={() => document.title="Mike Lind | Resume"}
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