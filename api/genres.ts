

export async function getGenres(): Promise<string[]> {
    const response = await fetch("https://cinemaguide.skillbox.cc/movie/genres", {
        method: "GET"
    })

    if (!response) {
        throw new Error(`Ошибка ${response.status}`)
    }

    const data = await response.json()
    return data
}