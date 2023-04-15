import React, {useState} from 'react'
import {MenuIcon, MenuCloseIcon, Logo} from '../assets/images/'
import {Nav} from './'

const Header = () => {
    const [active, setActive] = useState(false);
    function Menu() {
        if(active){
            return (
                <div className="overlay">
                    <div className="menu">
                        <button onClick={() => setActive(false)} className='menu-close'>
                            <img src={MenuCloseIcon} alt="Close Menu Icon" />
                        </button>
                        <Nav classes="menuNav" />
                    </div>
                </div>
            )
        }
    }
  return (
    <header>
        <img src={Logo} alt="Logo" className='logo'/>
        <button onClick={() => setActive(true)} className='burger'>
            <img src={MenuIcon} alt="Burger Menu Icon"/>
        </button>
        <Nav classes="mainNav" />
        <Menu />
    </header>
  )
}

export default Header