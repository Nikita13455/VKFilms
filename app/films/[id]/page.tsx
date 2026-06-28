import { getMovieByID } from "@/api/movie";
import MovieAbout from "@/app/components/MovieAbout/MovieAbout";
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




    return (
        <>
            <MovieDetails movie={movie} />
            <MovieAbout movie={movie} />
        </>
    )
}