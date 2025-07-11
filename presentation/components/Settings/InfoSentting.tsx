import {Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

interface Props{
    title: string,

}

const InfoSentting = ({title}:Props) => {
    return (
        <View className='flex flex-row justify-between items-center pb-2 border-b-[0.5px] border-[#bfbebe] pt-10'>
            <Text className='font-semibold text-white'>{title}</Text>
            <Ionicons name="chevron-forward-sharp" size={24} color="white" />
        </View>
    )
}

export default InfoSentting