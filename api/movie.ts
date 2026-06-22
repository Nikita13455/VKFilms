import { Movie, movieSchema } from "@/types/movie"

const URL = 'https://cinemaguide.skillbox.cc'

export async function getRandomMovie(): Promise<Movie> {
    const response = await fetch(`${URL}/movie/random`, {
        method: "GET"
    })

    if (!response.ok) {
        throw new Error(`Ошибка ${response.status}`)
    }


    const data = await response.json()


    return movieSchema.parse(data)


}

export async function getMovieByID(id: string): Promise<Movie> {
    const response = await fetch(`${URL}/movie/${id}`, {
        method: "GET"

    })

    if (!response.ok) {
        throw new Error(`Ошибка fetch'a: ${response.status}`)
    }

    const data = await response.json()


    return movieSchema.parse(data)
}