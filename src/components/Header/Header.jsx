import logo from '../../assets/elinika-logo.png'
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
        </header>
    )
}