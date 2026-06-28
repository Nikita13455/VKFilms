'use client'

import { useEffect } from 'react'
import './SuccessModal.scss'
import Logo from './../../../../public/lightlogo.svg'
import Close from './../../../../public/closeModal.svg'
import { EnterButton } from '../../EnterButton/EnterButton'

interface SuccessModalProps {
    message?: string
    onClose: () => void,
    onLoginClick?: () => void
}

export function SuccessModal({
    message = 'Вы успешно вошли!',
    onClose,
    onLoginClick

}: SuccessModalProps) {


    return (
        <div className="auth">
            <Logo />
            {message === 'registerSuccess' ?
                (<><div className='auth__modal'>
                    <h2 className='auth__title'>Регистрация успешно завершена</h2>
                    <p className='auth__description'>Используйте вашу электронную почту для входа</p>
                </div>
                    <EnterButton onClick={onLoginClick} type='login' /></>)
                :
                (<div className='auth__modal'><h2 className='auth__title'>Вы успешно вошли!</h2></div>)
            }
            <button className='auth__close' onClick={onClose}>
                <Close className='auth__svg' />
            </button>

        </div>
    )
}