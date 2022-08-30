import { Link } from 'react-router-dom'
import './index.scss'
//import LogoS from '../../assets/images/logo-s.png'
import LogoS from '../../assets/images/C1.jpg'
//***********************I left off trying to find a giant C and Gutierrez for nav bar, 12:45 timestamp */
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
    </div>
)

export default Sidebar