import x from '../../assets/x.png';
import fb from '../../assets/fb.png';
import ig from '../../assets/ig.png';
export function Footer() {
    return(
        <footer>
            <em>"donde pisa una leona no deja huella gatita"</em>
            <div className='social-media'>
                <img src={x} alt="Twitter icon"/>
                <img src={fb} alt="Facebook icon"/>
                <img src={ig} alt="Instagram icon"/>
            </div>
        </footer>
    )
}