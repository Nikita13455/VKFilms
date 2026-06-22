import Like from './../../../../public/like.svg'
import './ButtonLike.scss'

export default function ButtonLike({ addClass = '' }) {

    return (
        <button>
            <Like className={`like ${addClass}`} />
        </button>
    )
}