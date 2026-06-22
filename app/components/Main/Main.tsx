'use client'

import { getRandomMovie } from "@/api/movie";
import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

export function Main() {
    const [movie, setMovie] = useState<Movie | null>(null)
    const [isLoading, setLoading] = useState(true)

    const fetchMovie = () => {
        setLoading(true)
        getRandomMovie()
            .then(setMovie)
            .catch(console.error)
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    if (isLoading) return <p style={{ color: 'white' }}>Загрузка...</p>
    if (!movie) return <p style={{ color: 'red' }}>Ошибка загрузки</p>

    return <MovieDetails movie={movie} showRandomButton onRandomClick={fetchMovie} />
}