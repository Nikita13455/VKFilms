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

export async function getFilteredMovie(userValue: string): Promise<Movie[]> {
    const response = await fetch("https://cinemaguide.skillbox.cc/movie", {
        method: "GET"
    })

    if (!response.ok) {
        throw new Error(`ошибка при передаче ${response.status}`)
    }
    const data = await response.json()

    const filtered = data.filter(m => m.title.toLowerCase().includes(userValue.toLowerCase()))

    return filtered
}

export async function getPictures() {
    const all = await getFilteredMovie('')
    const filtered = all.filter(item => item.backdropUrl !== null)

    return filtered
}

export async function getMovieByGenre(genre: string) {
    const all = await getFilteredMovie('')
    const genreLower = genre.toLowerCase()



    const filtered = all.filter(item => {
        if (!item.genres || item.genres.length === 0) {
            return false
        }

        // some() возвращает true/false
        return item.genres.some(g =>
            g.toLowerCase() === genreLower
        )
    })

    return filtered
}