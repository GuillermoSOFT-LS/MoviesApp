import {ActivityIndicator, ScrollView, Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useMovie} from "@/presentation/Hooks/useMovie";
import MovieHeader from "@/presentation/components/movie/MovieHeader";

const MoviesScreen=()=> {

    const {id} = useLocalSearchParams()

    const  {movieQuery} = useMovie(+id)

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
            <MovieHeader
                originalTitle={movieQuery.data.originalTitle}
                title={movieQuery.data.title}
                poster={movieQuery.data.poster}
            />
        </ScrollView>
    )
}

export default MoviesScreen