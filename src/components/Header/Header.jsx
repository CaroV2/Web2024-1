import React from 'react'
import logo from '../assets/elinika-logo.png'
export function Header() {
    return(
        <header>
            <div className='logo'>
                <img src='https://pngimg.es/d/snowflakes_PNG7582.png' width="50" height="50" alt='logo'/>
            </div>
            <div className='menu'>
                <h3>Home</h3>
                <h3>News</h3>
                <h3>Design</h3>
                <h3>About us</h3>
            </div>
        </header>
    )
}