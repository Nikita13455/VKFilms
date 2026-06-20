import Logo from './../../../public/logo.svg'
import { Input } from '../Input/Input'
import './Header.scss'

export function Header() {
    return (
        <header className="header">
            <div className="container">
                <Logo className="header_logo" />
                <div className='header__wrapper'>
                    <a className='header__title'>Главная</a>
                    <a className="header__title">Жанры</a>
                    <Input addClass="header__input" />
                </div>
                <a className="header__title" >Войти</a>


            </div>
        </header>
    )
}