import {FlatList, Text, View} from "react-native";
import {Cast} from "@/Infrastructure/interfaces/Cast";
import {ActorCard} from "@/presentation/components/movie/ActorCard";

interface Props {
    cast: Cast[]
}

const MovieCast = ({cast}:Props)=> {
    return (
        <View className='px-5'>
            <Text className='pb-4 text-white text-2xl font-semibold'>Actores</Text>

            <FlatList
                data={cast}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                    <ActorCard
                        actor={item}
                    />}
            />
        </View>
    )
}

export default MovieCast