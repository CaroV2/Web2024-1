import './Footer.css'
import x from '../../assets/x.png';
import fb from '../../assets/fb.png';
import ig from '../../assets/ig.png';
import ifooter from '../../assets/elinika-footer.png'

export function Footer() {
    const handleClick = (url) => {
        window.open(url, '_blank');
      }
    
    return(
        <footer>
            <div className='logo-footer'>
                <img src={ifooter} alt='Elinika logo medium'/>
            </div>
            <div className='social-media'>
                <a onClick={() => handleClick('https://twitter.com/VisitHelsinki?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')}>
                <img src={x} alt="Twitter icon"/>
                </a>
                <a onClick={() => handleClick('https://www.facebook.com/visithelsinki/?locale=es_LA')}>
                <img src={fb} alt="Facebook icon"/>
                </a>
                <a onClick={() => handleClick('https://www.instagram.com/myhelsinki/')}>
                <img src={ig} alt="Instagram icon"/>
                </a>
            </div>
        </footer>
    )
}