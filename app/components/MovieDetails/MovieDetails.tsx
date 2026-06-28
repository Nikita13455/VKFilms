'use client'

import Image from "next/image";
import Star from './../../../public/star.svg'
import ButtonTrailer from "../Buttons/ButtonTrailer/ButtonTrailer";
import ButtonLike from "../Buttons/ButtonLike/ButtonLike";
import Reverse from './../../../public/reverse.svg';
import TrailerVideo from "../Modal/TrailerVideo/TrailerVideo";
import { Movie } from "@/types/movie";
import { useState } from "react";
import './MovieDetails.scss'
import Link from "next/link";

type MovieDetailsProps = {
    movie: Movie
    showRandomButton?: boolean
    onRandomClick?: () => void
}

export default function MovieDetails({ movie, showRandomButton = false, onRandomClick }: MovieDetailsProps) {
    const [isOpen, setOpen] = useState(false)

    const getRatingColor = (rating: number | null | undefined): string => {
        if (!rating) return '#6c757d' // серый по умолчанию

        if (rating < 4.2) return '#dc3545' // красный
        if (rating >= 4.2 && rating < 6.3) return '#6c757d' // серый
        if (rating >= 6.3 && rating < 7.2) return '#28a745' // зеленый
        return '#ffd700' // золотой (7.2 и выше)
    }

    const ratingColor = getRatingColor(movie.tmdbRating)

    return (
        <>
            <section className="main">
                <div className="container">
                    <div className="main__wrapper">
                        <div className="main__label">
                            <div className="main__mark" style={{ backgroundColor: ratingColor }}>
                                <Star />
                                <p className="main__mark--value">{movie.tmdbRating}</p>
                            </div>
                            <p className="main__releaseyear part">{movie.releaseYear}</p>
                            <ul className="main__genres">
                                {movie.genres?.map((item) => (
                                    <li key={item} className="main__genre part">{item}</li>
                                ))}
                            </ul>
                            <p className="main__runtime part">{`${movie.runtime} мин.`}</p>
                        </div>
                        <h1 className="main__title">{movie.title}</h1>
                        <p className="main__description">{movie.plot}</p>
                        <div className="main__links">
                            <ButtonTrailer addClass="main__trailer" onClickHandle={() => setOpen(true)} />
                            <div className="main__navs">
                                {showRandomButton && (<Link href={`films/${movie.id}`}><button className="main__about">О фильме</button></Link>)}
                                <ButtonLike addClass="main__like" />
                                {showRandomButton && (
                                    <button className="main__reverse button" onClick={onRandomClick}>
                                        <Reverse />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    {movie.posterUrl && (
                        <Image
                            src={movie.posterUrl}
                            alt="Постер фильма"
                            width={400}
                            height={550}
                            className="main__poster"
                        />
                    )}
                </div>
            </section>

            {isOpen && (
                <TrailerVideo
                    trailerUrl={movie.trailerUrl || ''}
                    onClose={() => setOpen(false)}
                />
            )}
        </>
    )
}