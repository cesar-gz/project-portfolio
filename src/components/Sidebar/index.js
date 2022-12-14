import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-c.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                to="/"
            > 
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="about-link" 
                to="/about"
            > 
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="portfolio-link" 
                to="/portfolio"
            > 
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="contact-link" 
                to="/contact"
            > 
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank"
                   rel="noreferrer" 
                   href="https://www.linkedin.com/in/cesar-gutierrez-c/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#fff" />
                </a>
            </li>

            <li>
                <a target = "_blank"
                   rel="noreferrer" 
                   href="https://github.com/cesar-gz"
                >
                    <FontAwesomeIcon icon={faGithub} color="#fff" />
                </a>
            </li>

            <li>
                <a target = "_blank"
                   rel="noreferrer" 
                   href="skype:live:.cid.9e1cfdd2ab6bfd6c"
                >
                    <FontAwesomeIcon icon={faSkype} color="#fff" />
                </a>
            </li>

        </ul>
    </div>
)

export default Sidebar