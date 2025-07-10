import {MovieApi} from "@/core/actions/api/MovieApi";
import {MobieMappers} from "@/Infrastructure/mappers/movie.mappers";
import {MovieDBMovieResponse} from "@/Infrastructure/interfaces/moviedb-movie.response";

export const getMovieByIdAction = async(id: number | string) => {
    try {
        const {data} = await MovieApi.get<MovieDBMovieResponse>(`/${id}`)

        return MobieMappers.fromTheMovieDBTocompleteMovie(data)

    }catch (error) {
        console.log(error);
        throw 'Cannot load now playing movies'
    }
}