import getBestMovies from "@/api/bestmovies";
import './BestMovieSection.scss'
import Image from "next/image";
import Link from "next/link";

export default async function BestMovieSection() {
    const movies = await getBestMovies()

    return (
        <section className="best-movies">
            <div className="container">
                <h2 className="best-movies__title">Топ 10 фильмов</h2>
                <ul className="best-movies__list">
                    {movies.map((item, index) => (
                        <li className="best-movies__item" key={item.id}>
                            <div className="best-movies__number">{index + 1}</div>
                            <Link href={`/films/${String(item.id)}`}>

                                {item.posterUrl === null ? <p>Нет фото</p> : (<Image className="best-movies__poster" width={224} height={336} src={item.posterUrl || ''} alt={item.title || ''} />)}
                            </Link>
                        </li>

                    ))}

                </ul>
            </div>
        </section >
    )
}