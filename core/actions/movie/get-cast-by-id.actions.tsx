import {MovieApi} from "@/core/actions/api/MovieApi";
import {MovieDBCreditsResponse} from "@/Infrastructure/interfaces/moviedb-credistResponse.Response";
import {CastMapper} from "@/Infrastructure/mappers/cast.mapper";

export const getMovieCastAction =async (movieId: number)=> {
    try {
        const { data } = await MovieApi.get<MovieDBCreditsResponse>(`/${movieId}/credits`);
        return data.cast.map(CastMapper.fromMovieDBCastToEntity)

    }catch (error) {
        console.log(error);
        throw 'no se puede hacer el cast por id'
    }
}