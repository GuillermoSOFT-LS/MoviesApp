import {CompleteMovie, Movie} from "@/Infrastructure/interfaces/Movie.interface";
import {Result} from "@/Infrastructure/interfaces/MoviesdbResponse";
import {MovieDBMovieResponse} from "@/Infrastructure/interfaces/moviedb-movie.response";


export class MobieMappers {
    static fromTheMovieDBToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
        }
    }

    static fromTheMovieDBTocompleteMovie = (movie: MovieDBMovieResponse): CompleteMovie => {

        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
            budget: movie.budget,
            duration: movie.runtime,
            genres: movie.genres.map(g => g.name),
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(c => c.name)
        }
    }
}