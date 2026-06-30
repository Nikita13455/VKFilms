'use client'

import Logo from './../../../public/logo.svg'
import { Input } from '../Input/Input'
import './Header.scss'
import Genres from './../../../public/genres.svg'
import Search from './../../../public/search_header.svg'
import User from './../../../public/user.svg'
import Link from 'next/link'
import { useState } from 'react'
import Close from './../../../public/close.svg'
import Login from '../Modal/Login/Login'
import { useSelector } from 'react-redux'
import { SuccessModal } from '../Modal/ModalSucces/SuccessModal'


export function Header() {

    const [isHeaderOpen, setHeader] = useState(false)
    const [isAuthModalOpen, setAuthModalOpen] = useState(false)
    const [isSuccessModalOpen, setSuccessModalOpen] = useState(false)
    const [status, setStatus] = useState('')
    const { user, isAuth } = useSelector((state) => state.user)


    function LoginMove() {
        setAuthModalOpen(true)
        setSuccessModalOpen(false)
    }



    return (
        <>
            <header className="header">
                <div className="container">
                    {isHeaderOpen ? (
                        <>
                            <Input addClass='header__input-mobile' />
                            <button className='header__input-close' onClick={() => setHeader(false)}><Close className="header__input-svg" /></button>
                        </>
                    ) : (
                        <>
                            <Link href="/"><Logo className="header__logo" /></Link>
                            <div className='header__wrapper'>
                                <Link href="/"><p className='header__title'>Главная</p></Link>
                                <Link href="/genres"><p className="header__title">Жанры</p></Link>
                                <Input addClass="header__input" />
                            </div>
                            {isAuth ? (<Link href="/profile"><p className="header__title">{user.name}</p></Link>) : (<a className="header__title" onClick={() => setAuthModalOpen(true)} >Войти</a>)}
                            <div className='header__content'>
                                <Link href='/genres'><Genres className="header__mark genre" /></Link>
                                <Search className="header__mark search" onClick={() => setHeader(true)} />
                                <User className="header__mark user" onClick={() => setAuthModalOpen(true)} />
                            </div>
                        </>
                    )
                    }
                </div>
            </header>

            {isAuthModalOpen ? (<Login onSuccess={(type) => {

                if (type === 'register') {
                    setStatus('registerSuccess')

                }
                else {
                    setStatus('loginSuccess')
                }
                // закрыть модалку авторизации
                setSuccessModalOpen(true)
                setAuthModalOpen(false)    // открыть модалку успеха
            }} onClose={() => setAuthModalOpen(false)} />) : ''}
            {isSuccessModalOpen && (
                <SuccessModal
                    message={status}
                    onClose={() => setSuccessModalOpen(false)}
                    onLoginClick={() => LoginMove()}
                />
            )}
        </>
    )
}