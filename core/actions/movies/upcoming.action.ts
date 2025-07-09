import {MovieApi} from "@/core/actions/api/MovieApi";
import {MovieDBMoviesResponse} from "@/Infrastructure/interfaces/MoviesdbResponse";
import {MobieMappers} from "@/Infrastructure/mappers/movie.mappers";

export const upcomingMoviesAction = async() => {
    try {
        const {data} = await MovieApi.get<MovieDBMoviesResponse>('/upcoming');
        const movies = data.results.map(MobieMappers.fromTheMovieDBToMovie)
        return movies

    }catch (error) {
        console.log(error);
        throw 'Cannot load top rated movies'
    }
}