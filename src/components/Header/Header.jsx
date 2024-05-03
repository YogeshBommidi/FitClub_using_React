import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='Header'>
      <img src={Logo} alt="" className='logo' />
      {menuOpened === false && mobile === true ? (
        <div style={{
          backgroundColor: 'var(--appColor)',
          padding: '0.5rem', borderRadius: '5px'
        }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : <ul className='header-menu'>
        <li>
          <Link
            to='hero'
            onClick={() => setMenuOpened(false)}
            smooth={true}
            spy={true}>Home
          </Link>
        </li>
        <li>
          <Link
            to='Programs'
            onClick={() => setMenuOpened(false)}
            smooth={true}
            spy={true}>Programs
          </Link>
        </li>
        <li>
          <Link
            to='Reasons'
            onClick={() => setMenuOpened(false)}
            smooth={true}
            spy={true}>Why Us
          </Link>
        </li>
        <li>
          <Link
            to='plans-container'
            onClick={() => setMenuOpened(false)}
            smooth={true}
            spy={true}>Plan
          </Link>
        </li>
        <li>
          <Link
            to='Testimonials'
            onClick={() => setMenuOpened(false)}
            smooth={true}
            spy={true}>Testimonials
          </Link>
        </li>
        <li>
          <Link
            to='Join'
            onClick={() => setMenuOpened(false)}
            smooth={true}
            spy={true}>Join US
          </Link>
        </li>
      </ul>}
    </div>
  )
}

export default Header
