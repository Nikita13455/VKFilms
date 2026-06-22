import Logo from './../../../public/logo.svg'
import { Input } from '../Input/Input'
import './Header.scss'
import Genres from './../../../public/genres.svg'
import Search from './../../../public/search_header.svg'
import User from './../../../public/user.svg'
import Link from 'next/link'

export function Header() {
    return (
        <header className="header">
            <div className="container">
                <Link href="/"><Logo className="header_logo" /></Link>
                <div className='header__wrapper'>
                    <Link href="/"><p className='header__title'>Главная</p></Link>
                    <a className="header__title">Жанры</a>
                    <Input addClass="header__input" />
                </div>
                <a className="header__title" >Войти</a>
                <div className='header__content'>
                    <Link href='/genres'><Genres className="header__mark genre" /></Link>
                    <Search className="header__mark search" />
                    <User className="header__mark user" />
                </div>


            </div>
        </header>
    )
}