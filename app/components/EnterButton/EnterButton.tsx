import './EnterButton.scss'

export function EnterButton({ type, onClick }: { type: 'login' | 'register', onClick: () => void }) {
    return (
        <>
            <button onClick={onClick} className={`enter-button ${type}`}>{type === 'login' ? 'Войти' : "Зарегистрироваться"}</button>
        </>
    )
}