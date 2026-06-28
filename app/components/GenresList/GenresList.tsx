import { getGenres } from '@/api/genres'
import './GenresList.scss'
import { getPictures } from '@/api/movie'
import Image from 'next/image';
import Link from 'next/link';

export default async function GenresList() {

    const genres = await getGenres()
    const pictures = await getPictures()
    console.log(genres)
    return (
        <section className="genres">
            <div className='container'>
                <h1 className='genres__title'>Жанры фильмов</h1>
                <ul className='genres__list'>
                    {genres.map((genre, index) => {
                        return (

                            <Link key={genre} href={`/genres/${genre}`}>
                                <li className='genres__item'>
                                    <Image
                                        src={pictures[index].backdropUrl}
                                        alt={genre}
                                        height={304}
                                        width={290}
                                        className='genres__image'
                                    ></Image>
                                    <h2 className='genres__head'>{genre}</h2>

                                </li>
                            </Link>

                        )


                    })}
                </ul>
            </div>
        </section>
    )
}