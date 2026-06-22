import { getMovieByID } from "@/api/movie";
import MovieDetails from "@/app/components/MovieDetails/MovieDetails";
import Image from "next/image";

type paramsProps = {
    params: {
        id: string;
    }
}


export default async function Film({ params }: paramsProps) {
    const { id } = await params
    const movie = await getMovieByID(id)


    console.log(movie)

    return (
        <MovieDetails movie={movie} />
    )
}