import VK from './../../../public/vk.svg'
import YT from './../../../public/youtube.svg'
import OK from './../../../public/ok.svg'
import TG from './../../../public/telegram.svg'
import './Footer.scss'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <a className='footer__nav' href='https://vk.com' target='_blank'><VK className="footer__icon" /></a>
                <a className='footer__nav' href='https://youtube.com' target='_blank'><YT className="footer__icon" /></a>
                <a className='footer__nav' href='https://ok.com' target='_blank'><OK className="footer__icon" /></a>
                <a className='footer__nav' href='https://t.me/@Nikita134555' target='_blank'><TG className="footer__icon" /></a>
            </div>
        </footer>
    )
}