import pic2 from '../../../assets/images/self_pic2.jpg';
import './index.scss';

const Logo = () => {

  return (
    <div className="logo-container">
        <img src={pic2} alt="Pic2"
          style={{
          width: '70%',
          clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 75%)',
          }} />
    </div>
  );
};

export default Logo;
