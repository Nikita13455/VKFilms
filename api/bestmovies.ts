import { Movie } from "@/types/movie";

const URL = 'https://cinemaguide.skillbox.cc'

export default async function getBestMovies(): Promise<Movie[]> {
    const response = await fetch(`${URL}/movie/top10`, {
        method: "GET"
    })

    if (!response.ok) {
        throw new Error(`Ошибка в получении фильмов: ${response.status}`)
    }

    const data = await response.json()
    return data
}