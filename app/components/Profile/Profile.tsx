'use client'

import Heart from './../../../public/like.svg'
import Face from './../../../public/iconface.svg'
import './Profile.scss'
import { useState } from 'react'
import Email from './../../../public/email.svg'
import { EnterButton } from '../EnterButton/EnterButton'
import { logout } from '@/api/auth'
import { logOut } from '@/store/slices/userSlice'

import { Dispatch } from '@reduxjs/toolkit'
import { useAppDispatch } from '@/store/hooks/useAppDispatch'


type propsUser = {
    email: string,
    favorites: string[],
    name: string,
    surname: string
}

export default function Profile({ user }: { user: propsUser }) {
    const [isOpen, setOpen] = useState(false)
    const dispatch = useAppDispatch()


    async function HandleLogOut() {
        try {
            await logout()

        }
        catch (er) {
            console.warn('Ошибка при выходе, но мы всё равно разлогиниваемся')
        }
        dispatch(logOut())
        window.location.href = '/'
    }
    return (
        <section className="profile">
            <div className='container'>
                <h1 className="profile__title">Мой аккаунт</h1>
                <div className="profile__navs">
                    <div className="profile__unit">
                        <Heart className="profile__svg" />
                        <button className="profile__button" onClick={() => setOpen(true)}>
                            Избранные фильмы
                        </button>
                    </div>
                    <div className="profile__unit">
                        <Face className="profile__svg" style={{ fill: "white" }} />
                        <button className="profile__button" onClick={() => setOpen(false)}>
                            Настройка аккаунта
                        </button>
                    </div>
                </div>
                {isOpen ? (
                    <div className='profile__best'>


                    </div>
                ) :
                    <div className='profile__info'>
                        <div className="profile__ceil">
                            <div className='profile__short'>{user.name[0]} {user.surname[0]}</div>
                            <div className="profile__contacts">
                                <p className="profile__indicate">Имя Фамилия</p>
                                <h2 className='profile__private'>{`${user.name} ${user.surname}`}</h2>
                            </div>
                        </div>
                        <div className="profile__ceil">
                            <div className='profile__short'><Email /></div>
                            <div className="profile__contacts">
                                <p className="profile__indicate">Электронная почта</p>
                                <h2 className='profile__private'>{`${user.email}`}</h2>
                            </div>
                        </div>
                        <EnterButton className='profile__logout' type='logout' onClick={() => HandleLogOut()} />

                    </div>}
            </div>


        </section>
    )

}