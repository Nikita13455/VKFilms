import { getMovieByGenre } from "@/api/movie"
import Image from "next/image"
import './MoviesByGenre.scss'
import Link from "next/link"

export default async function MoviesByGenre({ genre }: { genre: string }) {
    const movies = await getMovieByGenre(genre)

    return (
        <section className="movies">
            <div className="container">
                <h1 className="movies__title">
                    {genre}
                </h1>
                <ul className="movies__list">
                    {movies.map((movie) => (
                        <Link href={`/films/${movie.id}`} key={movie.title}>
                            <li className="movies__item" >
                                <Image className="movies__image" src={movie.posterUrl || ''} alt={movie.title || ''} height={336} width={224}></Image>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </section>
    )
}