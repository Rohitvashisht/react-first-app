import { APP_LOGO_CDN_URL } from '../utils/constants';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={APP_LOGO_CDN_URL} />
      </div>
      <div className='nav-links'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;

