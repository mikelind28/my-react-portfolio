import { NavLink } from 'react-router';
import GitHubLogo from '../assets/images/GitHub_Logo.png';

export default function Footer() {
    return (
        <footer>
            <nav>
            <ul>
                <li>
                <NavLink 
                to="/"
                className={({ isActive }) => isActive ? "footer-link-active" : "" }
                id="about"
                end
                >
                about
                </NavLink>
                </li>

                <li>
                <NavLink 
                to="/portfolio"
                className={({ isActive }) => isActive ? "footer-link-active" : "" }
                id="portfolio"
                end
                >
                portfolio
                </NavLink> 
                </li>

                <li>
                <NavLink 
                to="/contact"
                className={({ isActive }) => isActive ? "footer-link-active" : "" }
                id="contact"
                end
                >
                contact
                </NavLink> 
                </li>

                <li>
                <NavLink 
                to="/resume"
                className={({ isActive }) => isActive ? "footer-link-active" : "" }
                id="resume"
                end
                >
                resume
                </NavLink> 
                </li>
            </ul>

            <a href="https://github.com/mikelind28" target="_blank"><img id="github-logo" src={GitHubLogo} alt="GitHub Link"></img></a>
            </nav>
        </footer>
    );
}