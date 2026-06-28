import { getMovieByGenre } from "@/api/movie";
import MoviesByGenre from "@/app/components/MoviesByGenre/MoviesByGenre";

interface genreProps {
    params: Promise<{
        genre: string;
    }>
}

export default async function GenreInfo({ params }: genreProps) {
    const { genre } = await params

    return (
        <>
            <MoviesByGenre genre={genre} />
        </>
    )






}