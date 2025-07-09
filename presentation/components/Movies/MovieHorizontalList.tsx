import {FlatList, Text, View} from "react-native";
import {Movie} from "@/Infrastructure/interfaces/Movie.interface";
import MoviePoster from "@/presentation/components/Movies/MoviePoster";

interface  Props {
    title?: string,
    movies: Movie[];
    className?: string,
}


const MovieHorizontalList = ({title,movies,className}:Props)=> {
    return (
        <View className={`${className}`}>
            {title && <Text className=' text-white text-xl font-bold px-4 pb-4'>{title}</Text>}
            <FlatList
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item)=> `${item.id}`}
                renderItem={({item}) => <MoviePoster  id={item.id} poster={item.poster} smallPoster/>}
            />
        </View>
    )
}

export default MovieHorizontalList