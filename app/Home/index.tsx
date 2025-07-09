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
                <Text className='pb-4'>Espere un momento...</Text>
                <ActivityIndicator  color='blue' size={70}/>
            </View>
        )
    }

    return (
        <ScrollView>
            <View className='pb-20 bg-[#111]' style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
                <Text className='px-4 bg-black text-blue-600 text-3xl py-5'>LaraMovies</Text>

                {/*Slides de imagenes*/}
                <MainSlidesshow movies={nowPlayingQuery.data ?? []}/>

                {/*Popular*/}
                <MovieHorizontalList title='Populares'  movies={popularQuery.data ?? []} className='pb-10'/>

                {/*top rated*/}
                <MovieHorizontalList title='Mejor calificadas'  movies={topRantedQuery.data ?? []} className='pb-10'/>

                {/*upcommig*/}
                <MovieHorizontalList title='Proximamente'  movies={upcomingQuery.data ?? []}/>
            </View>
        </ScrollView>

    )
}

export default HomeScreen;