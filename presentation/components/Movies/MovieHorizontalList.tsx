import {FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View} from "react-native";
import {Movie} from "@/Infrastructure/interfaces/Movie.interface";
import MoviePoster from "@/presentation/components/Movies/MoviePoster";
// import {useRef} from "react";

interface  Props {
    title?: string,
    movies: Movie[];
    className?: string,
    // loadNexPage?: () => void
}


const MovieHorizontalList = ({title,movies,className}:Props)=> {

    // const isLoading = useRef(false)
    // const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>)=> {
    //     if (isLoading.current) return;
    //
    //     const {contentSize, layoutMeasurement, contentOffset} = event.nativeEvent;
    //
    //     const isEndReached =
    //         contentOffset.x + layoutMeasurement.width + 600 > contentSize.width;
    //
    //     if (!isEndReached) return;
    //
    //     isLoading.current = true;
    //     loadNexPage && loadNexPage();
    // }
    return (
        <View className={`${className}`}>
            {title && <Text className=' text-[#c6c4c4] text-xl font-bold px-4 pb-4'>{title}</Text>}
            <FlatList
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item)=> `${item.id}`}
                renderItem={({item}) => <MoviePoster  id={item.id} poster={item.poster} smallPoster/>}
                // onScroll={onScroll}
            />
        </View>
    )
}

export default MovieHorizontalList