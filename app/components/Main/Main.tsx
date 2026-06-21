import { getRandomMovie } from "@/api/movie";
import './Main.scss'

export async function Main() {
    try {
        const movie = await getRandomMovie()


        return (
            <main className="main">
                <div className="container">
                    <div className="main__wrapper">
                        <h1 className="main__title">
                            {movie.title}
                        </h1>
                    </div>
                    {movie.posterUrl && (<img className="main__photo" src={movie.posterUrl} alt="Заставка фильма" />)}
                </div>

            </main>
        )

    } catch (err) {
        console.error(`Ошибка при загрузке фильма в Main: ${err}`)
        return (
            <div>
                <p style={{ color: "red" }}>Ошибка загрузки фильма</p>
            </div>
        )
    }



}