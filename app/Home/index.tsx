import {useMovies} from "@/presentation/Hooks/useMovies";
import {Text, View, ActivityIndicator, ScrollView} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import MainSlidesshow from "@/presentation/components/Movies/MainSlidesshow";
import MovieHorizontalList from "@/presentation/components/Movies/MovieHorizontalList";


const HomeScreen = () => {

    const insets = useSafeAreaInsets();

    const {nowPlayingQuery, popularQuery,topRantedQuery,upcomingQuery} = useMovies()

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <Text>Espere un momento...</Text>
                <ActivityIndicator  color='blue' size={70}/>
            </View>
        )
    }

    return (
        <ScrollView>
            <View className='pb-10' style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
                <Text className='px-4 text-3xl pt-6'>LaraMovies</Text>

                {/*Slides de imagenes*/}
                <MainSlidesshow movies={nowPlayingQuery.data ?? []}/>

                {/*Popular*/}
                <MovieHorizontalList title='Populares'  movies={popularQuery.data ?? []}/>

                {/*top rated*/}
                <MovieHorizontalList title='Mejor calificadas'  movies={topRantedQuery.data ?? []}/>

                {/*upcommig*/}
                <MovieHorizontalList title='Proximamente'  movies={upcomingQuery.data ?? []}/>
            </View>
        </ScrollView>

    )
}

export default HomeScreen;