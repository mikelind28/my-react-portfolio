import { NavLink } from 'react-router';
import GitHubLogo from '../assets/images/GitHub_Logo.png';

export default function Footer() {
    return (
        <footer>
            <nav>
            <hr></hr>
            <ul>
                <li>
                <NavLink 
                to="/"
                className={({ isActive }) => isActive ? "footer-link-active" : "" }
                id="about"
                onClick={() => document.title="Mike Lind | About"}
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
                onClick={() => document.title="Mike Lind | Portfolio"}
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
                onClick={() => document.title="Mike Lind | Contact"}
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
                onClick={() => document.title="Mike Lind | Resume"}
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