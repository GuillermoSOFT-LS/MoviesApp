import {Text, View} from "react-native";
import {CompleteMovie} from "@/Infrastructure/interfaces/Movie.interface";
import {Ionicons} from "@expo/vector-icons";
import {Formatter} from "@/config/helpers/formatter";

interface Props {
    movie: CompleteMovie
}

const MovieDescription = ({movie}:Props)=> {
    return (
        <View className='mx-4 pb-10'>
            <View className='flex flex-row items-center'>
                <Ionicons name="star-sharp" size={14} color="yellow" />
                <Text className='text-white'> {movie.rating}</Text>
                <Text className='text-white text-[13px]'> - {movie.genres.join(', ')}</Text>
            </View>

            <View className='flex flex-row items-center pt-4'>
                <Text className='text-white text-[15px] font-semibold'>Duracion: </Text>
                <Text className='text-[#c6c4c4]'>{Formatter.duration(movie.duration)}</Text>
            </View>

                <Text className='text-white text-[15px] pt-6 pb-4 font-semibold'>Sinopsis</Text>
                <Text className='text-[#c6c4c4]'>{movie.description}</Text>

            <View className='flex flex-row items-center pt-1'>
                <Text className='text-white text-[15px] pt-6 pb-4 font-semibold mb-2'>Presupuesto: </Text>
                <Text className='text-[#c6c4c4]'> {Formatter.currency((movie.budget))}</Text>
            </View>
            <View className='flex flex-1'>
                <Text className='text-white text-[15px]  font-semibold mb-2'>Compañías productoras: </Text>
                <Text className='text-[#c6c4c4]'>{movie.productionCompanies.join(', ')}</Text>
            </View>

        </View>
    )
}

export default MovieDescription;