import logo from '../../assets/elinika-logo.png'
import './Header.css'

export function Header() {
    return(
        <header>
            <div className='logo'>
                <img src={logo} width="50" alt='logo'/>
            </div>
            <div className='menu'>
                <a href='#'><h3>Home</h3></a>
                <a href='#'><h3>News</h3></a>
                <a href='#'><h3>Design</h3></a>
                <a href='#'><h3>About us</h3></a>
            </div>
            <nav id="menu-box">
                <ul>
                <li><a href="#">Enlace 1</a></li>
                <li><a href="#">Enlace 2</a></li>
                <li><a href="#">Enlace 3</a></li>
                <li><a href="#">Enlace 4</a></li>
                <li><a href="#">Enlace 5</a></li>
                </ul>
                </nav>
        </header>
    )
}