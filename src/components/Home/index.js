import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-c2.png';
import './index.scss';

const Home = () => {


    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                esar,
                <br />
                a computer science student
                </h1>
                <h2>Learning to make secure and reliable software</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    );
}

export default Home;