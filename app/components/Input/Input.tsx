import Search from '@/public/search.svg'
import '@/app/components/Input/Input.scss'

export function Input({ addClass = '' }: { addClass?: string }) {
    return (
        <div className={`custom-input ${addClass}`}>
            <input type="text" placeholder="Поиск" className="custom-input__field" />
            <Search className={`custom-input__icon`} />
        </div>)

}