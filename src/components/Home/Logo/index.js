import pic from '../../../assets/images/self_pic.jpg'
import pic2 from '../../../assets/images/self_pic3.jpg'
import './index.scss'

const Logo = () => {

    return(
        <div className="logo-container" >
        <img className="solid-logo" src={pic} alt="Pic1" />
        <img className="solid-logo2" src={pic2} alt="Pic2" />
        </div>
    )
}

export default Logo
