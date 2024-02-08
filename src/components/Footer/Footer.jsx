import './Footer.css'
import x from '../../assets/x.png';
import fb from '../../assets/fb.png';
import ig from '../../assets/ig.png';
import ifooter from '../../assets/elinika-footer.png'
export function Footer() {
    return(
        <footer>
            <div className='logo-footer'>
                <img src={ifooter} alt='Elinika logo medium'/>
            </div>
            <div className='social-media'>
                <img src={x} alt="Twitter icon"/>
                <img src={fb} alt="Facebook icon"/>
                <img src={ig} alt="Instagram icon"/>
            </div>
        </footer>
    )
}