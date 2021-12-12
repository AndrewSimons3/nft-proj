import './Header.css';
import punkLogo from '../assets/cryptopunk-logo.png'
import searchIcon from '../assets/search.png';
import themeSwitchIcon from '../assets/theme-switch.png';


const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className='punkLogo' alt='' />
      </div>

      <div className='searchBar'>
        <div className='searchIconContainer'>
          <img src={searchIcon} alt="search icon"/>
        </div>
        <input className='searchInput'
          placeholder='Collection, item or user ...'
        />
      </div>

      <div className='headerItems'>
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className='headerActions'>
        <div className='themeSwitchContainer'>
          <img src={themeSwitchIcon} alt="light icon" />
        </div>
      </div>

      <div className='loginButton'>Get In</div>
	  </div>
  )
}

export default Header;