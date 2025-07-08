import {useMovies} from "@/presentation/Hooks/useMovies";
import {Text, View, ActivityIndicator} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import MainSlidesshow from "@/presentation/components/Movies/MainSlidesshow";


const HomeScreen = () => {

    const insets = useSafeAreaInsets();

    const {nowPlayingQuery} = useMovies()

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <Text>Espere un momento...</Text>
                <ActivityIndicator  color='blue' size={70}/>
            </View>
        )
    }

    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <Text className='px-4 text-3xl'>LaraMovies</Text>

            {/*Slides de imagenes*/}
            <MainSlidesshow movies={nowPlayingQuery.data ?? []}/>
        </View>
    )
}

export default HomeScreen;