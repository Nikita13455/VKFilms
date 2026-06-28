'use client'

import { Movie } from '@/types/movie'
import Search from '@/public/search.svg'
import '@/app/components/Input/Input.scss'
import { getFilteredMovie } from '@/api/movie'
import { useEffect, useLayoutEffect, useState } from 'react'
import Link from 'next/link'
import Star from './../../../public/star.svg'
import Image from 'next/image'
import './Input.scss'
import { usePathname } from 'next/navigation'

export function Input({ addClass = '' }: { addClass?: string }) {

    const [movies, setMovies] = useState<Movie[]>([])
    const [isOpen, setOpen] = useState(false)
    const pathname = usePathname()
    const [value, setValue] = useState('')


    async function handleSearch(param: string) {
        if (param.length === 0) {
            setMovies([])
            setOpen(false)
            return
        }

        const response = await getFilteredMovie(param)
        setMovies(response)
        setOpen(true)



    }

    const getRatingColor = (rating: number | null | undefined): string => {
        if (!rating) return '#6c757d' // серый по умолчанию

        if (rating < 4.2) return '#dc3545' // красный
        if (rating >= 4.2 && rating < 6.3) return '#6c757d' // серый
        if (rating >= 6.3 && rating < 7.2) return '#28a745' // зеленый
        return '#ffd700' // золотой (7.2 и выше)
    }

    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setOpen(false)
            setValue('')
        }
    }, [pathname])



    return (
        <div className={`custom-input ${addClass}`}>
            <input type="text" value={value} placeholder="Поиск" className="custom-input__field" onChange={(e) => {
                setValue(e.target.value)
                handleSearch(e.target.value)
            }} />
            <Search className={`custom-input__icon`} />
            {isOpen && (
                <ul className="custom-input__list">
                    {movies.length === 0 ? (
                        <li className="search-card__error">Не найдено</li>
                    ) : (
                        movies.map((item) => {

                            const color = getRatingColor(item.tmdbRating)
                            return (
                                <Link key={item.id} href={`/films/${item.id}`}>
                                    <li className="custom-input__item">
                                        <div className="search-card">
                                            <Image
                                                src={item.posterUrl || ''}
                                                alt={item.title || ''}
                                                width={40}
                                                height={52}
                                            />
                                            <div className="search-card__wrapper">
                                                <div className="search-card__label">
                                                    <div className="search-card__mark" style={{ backgroundColor: color }}>
                                                        <Star />
                                                        <p className="search-card__mark--value">{item.tmdbRating.toFixed(1)}</p>
                                                    </div>
                                                    <p className="search-card__releaseyear part">{item.releaseYear}</p>
                                                    <ul className="search-card__genres">
                                                        {item.genres?.map((genre) => (
                                                            <li key={genre} className="search-card__genre part">{genre}</li>
                                                        ))}
                                                    </ul>
                                                    <p className="search-card__runtime part">{`${item.runtime} мин.`}</p>
                                                </div>
                                                <h3 className='search-card__title'>{item.title}</h3>
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            )



                        })
                    )}
                </ul>
            )}
        </div >)

}