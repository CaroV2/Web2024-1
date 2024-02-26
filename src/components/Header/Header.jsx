import { useState } from 'react';

import './Header.css'
import logo from '../../assets/elinika-logo.png'
import menu from '../../assets/hamburguer-menu.png'

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header>
            <div className='logo'>
                <img src={logo} width="50" alt='logo'/>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className='hamburger'>
                <img src={menu} width="50" alt='menu icon'/>
            </button>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <a href='#'><h3>Home</h3></a>
                <a href='#'><h3>News</h3></a>
                <a href='#'><h3>Design</h3></a>
                <a href='#'><h3>About us</h3></a>
            </nav>
        </header>
    )
}