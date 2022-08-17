import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../Navbar/images/CoinGeckoLogo.jpg';
import './Navbar.scss';

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'><a href='/'>Home</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#--c-gray' }} />) : (<FaBars size={30} style={{  color: '#--c-gray'}} />)}
            </div>
        </div>
    )
}
export default Navbar