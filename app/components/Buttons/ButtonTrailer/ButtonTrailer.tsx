import './ButtonTrailer.scss'

export default function ButtonTrailer({ addClass = '', onClickHandle }: { addClass: string, onClickHandle: () => void }) {
    return (
        <button className={`buttonTrailer ${addClass} `} onClick={() => onClickHandle()}>Трейлер</button>
    )
}