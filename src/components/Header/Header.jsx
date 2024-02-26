import { useState } from 'react';

import './Header.css'
import logo from '../../assets/elinika-logo.png'

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header>
            <div className='logo'>
                <img src={logo} width="50" alt='logo'/>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className='hamburger'>
                <div></div>
                <div></div>
                <div></div>
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