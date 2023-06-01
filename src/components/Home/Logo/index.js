import pic from '../../../assets/images/self_pic.jpg'
import pic3 from '../../../assets/images/self_pic3.jpg'
import './index.scss'

const Logo = () => {

  return (
    <div className="logo-container" >
      <ul className="slides">

        <input type="radio" name="radio-buttons" id="img-1" checked />
        <li class="slide-container">
          <div className="slide-image">
            <img src={pic} alt="Pic1" style={{ width: '50%', height: 'auto' }} />
          </div>
          <div className="carousel-controls">
            <label for="img-2" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label for="img-2" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>

        <input type="radio" name="radio-buttons" id="img-2" />
        <li className="slide-container">
          <div className="slide-image">
            <img src={pic3} alt="Pic2" style={{width: '50%', height: 'auto'}} />
          </div>
          <div className="carousel-controls">
            <label for="img-1" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label for="img-1" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>

        <div className="carousel-dots">
          <label for="img-1" className="carousel-dot" id="img-dot-1"></label>
          <label for="img-2" className="carousel-dot" id="img-dot-2"></label>
        </div>

      </ul>
    </div>

    )
}

export default Logo
