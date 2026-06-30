import './EnterButton.scss'

export function EnterButton({ type, onClick, className = '' }: { type: 'login' | 'register' | "logout", onClick: () => void, className: string }) {
    return (
        <>
            <button onClick={onClick} className={`enter-button ${className}`}>{type === 'login' ? 'Войти' : type === "register" ? "Зарегестрироваться" : "Выйти из аккаунта"}</button>
        </>
    )
}