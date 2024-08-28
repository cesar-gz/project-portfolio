import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import MusicPlayer from '../MusicPlayer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

  const handleClick = (event) => {
        event.preventDefault();
    };

  return (
    <div className='nav-bar'>
      <Link className='logo' to='/' onClick={handleClick}>
        <MusicPlayer />
      </Link>
      <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#8399a2" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#8399a2" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#8399a2" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#8399a2" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/cesargz/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#8399a2" />
          </a>
        </li>

        <li>
          <a target="_blank"
            rel="noreferrer"
            href="https://github.com/cesar-gz"
          >
            <FontAwesomeIcon icon={faGithub} color="#8399a2" />
          </a>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar
