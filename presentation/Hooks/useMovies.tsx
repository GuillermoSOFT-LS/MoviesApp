import {useQuery} from "@tanstack/react-query";
import {NowPlayingAction} from "@/core/actions/movies/now-playing.action";
import {popularMoviesAction} from "@/core/actions/movies/popular.action";
import {topRatedMoviesAction} from "@/core/actions/movies/top-rated.action";
import {upcomingMoviesAction} from "@/core/actions/movies/upcoming.action";


export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ['movies','nowPlaying'],
        queryFn: NowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24  //24 horas
    })

    const popularQuery = useQuery({
        queryKey: ['movies','popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24  //24 horas
    })

    const topRantedQuery = useQuery({
        queryKey: ['movies','top-rated'],
        queryFn: topRatedMoviesAction,
        staleTime: 1000 * 60 * 60 * 24  //24 horas
    })

    const upcomingQuery = useQuery({
        queryKey: ['movies','upcoming'],
        queryFn: upcomingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24  //24 horas
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topRantedQuery,
        upcomingQuery
    }
}