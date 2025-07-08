import {Movie} from "@/Infrastructure/interfaces/Movie.interface";
import {Result} from "@/Infrastructure/interfaces/MoviesdbResponse";


export class MobieMappers {
    static fromTheMovieDBToMovie = (movie: Result): Movie => {

        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: movie.release_date,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
        }
}
  }