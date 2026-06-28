'use client'

import { useState } from "react";
import Logo from './../../../../public/lightlogo.svg';
import './Login.scss'
import Close from './../../../../public/closeModal.svg'
import { AuthInput } from "../../AuthInput/AuthInput";
import { EnterButton } from "../../EnterButton/EnterButton";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { loginUser, registerUser } from "@/store/slices/userSlice";

export default function Login({ onClose, onSuccess }: { onClose?: () => void, onSuccess: (type: "login" | "register") => void }) { // ← добавить onClose
    const [isLogin, setState] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [name, setName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [error, setError] = useState('') // ← добавить состояние для ошибок

    const dispatch = useAppDispatch()

    const HandleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('') // ← очищаем ошибку перед отправкой

        try {
            if (isLogin) {
                console.log('Отправляю:', { email, password })
                await dispatch(loginUser({ email, password })).unwrap()
                onSuccess('login')
            } else {
                // РЕГИСТРАЦИЯ
                if (password !== passwordConfirm) {
                    setError('Пароли не совпадают')
                    return
                }
                await dispatch(registerUser({
                    email,
                    password,
                    name: name,    // ← исправлено на firstName
                    surname: secondName // ← исправлено на lastName
                })).unwrap()
                onSuccess("register")
            }

            // Успех → закрываем модалку
            onClose?.()

        } catch (err: any) {
            setError(err.message || 'Произошла ошибка')
            console.error('Ошибка:', err)
        }
    }

    return (
        <div className="auth">
            <button className='auth__close' onClick={onClose}>
                <Close className="auth__svg" />
            </button>
            <Logo />
            <form onSubmit={HandleSubmit} className="auth__form"> {/* ← onSubmit, не action */}
                {isLogin ? (
                    // Форма входа
                    <>
                        <AuthInput
                            type="email"
                            placeholder="Введите email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <AuthInput
                            type="password"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="auth__error">{error}</p>}
                        <EnterButton type="login" />
                        <button className="auth__switch" type="button" onClick={() => setState(false)}>Регистрация</button>
                    </>
                ) : (
                    // Форма регистрации
                    <>
                        <AuthInput
                            type="email"
                            placeholder="Введите email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <AuthInput
                            type="face"
                            placeholder="Введите ваше имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <AuthInput
                            type="face"
                            placeholder="Введите вашу фамилию"
                            value={secondName}
                            onChange={(e) => setSecondName(e.target.value)}
                        />
                        <AuthInput
                            type="password"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <AuthInput
                            type="password"
                            placeholder="Подтвердите пароль"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                        {error && <p className="auth__error">{error}</p>}
                        <EnterButton type="register" />
                        <button className="auth__switch" type="button" onClick={() => setState(true)}>Уже есть аккаунт</button>
                    </>
                )}
            </form>
        </div>
    )
}