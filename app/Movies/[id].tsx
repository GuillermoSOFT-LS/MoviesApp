import {ActivityIndicator, ScrollView, Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useMovie} from "@/presentation/Hooks/useMovie";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieCast from "@/presentation/components/movie/MovieCast";

const MoviesScreen=()=> {

    const {id} = useLocalSearchParams()

    const  {movieQuery, castQuery} = useMovie(+id)

    if (movieQuery.isLoading || !movieQuery.data){
        return (
            <View className='flex flex-1 justify-center items-center'>
                <Text className='pb-4'>Espere por favor...</Text>
                <ActivityIndicator color='blue' size={50}/>
            </View>
        )
    }

    return (
        <ScrollView>
            <View className='flex flex-1 bg-[#12100f]'>
                <MovieHeader
                    originalTitle={movieQuery.data.originalTitle}
                    title={movieQuery.data.title}
                    poster={movieQuery.data.poster}
                />

                <MovieDescription movie={movieQuery.data} />

                <MovieCast cast={castQuery.data ?? []} />
            </View>

        </ScrollView>
    )
}

export default MoviesScreen