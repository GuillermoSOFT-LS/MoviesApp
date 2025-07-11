import {MovieDBCast} from "@/Infrastructure/interfaces/moviedb-credistResponse.Response";
import {Cast} from "@/Infrastructure/interfaces/Cast";

export class CastMapper {
    static fromMovieDBCastToEntity(actor: MovieDBCast): Cast {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No character',
            avatar: actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : 'https://static.vecteezy.com/system/resources/previews/009/952/572/non_2x/male-profile-picture-vector.jpg',
        };
    }
}