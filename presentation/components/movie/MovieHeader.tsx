import {Pressable, Text, useWindowDimensions, View} from "react-native";
import {Image} from "expo-image";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";


interface Props {
    poster: string
    originalTitle: string
    title: string
}

const MovieHeader = ({poster,originalTitle,title}:Props)=> {

    const  {height:screenHeight} = useWindowDimensions()
    return (
        <>
            <View style={{
                position: 'absolute',
                zIndex: 99,
                elevation: 3,
                top: 15,
                left: 10

            }}>
                <Pressable onPress={()=> router.dismiss()}>
                    <Ionicons name='arrow-back'
                              size={30}
                              color='white'
                    />
                </Pressable>
            </View>
            <View style={{height: screenHeight * 0.7}}
                className='shadow-xl shadow-black/20'>
            <View className='flex-1 rounded-b-[25px] overflow-hidden'>
                <Image
                    source={{uri: poster}}
                    resizeMode="cover"
                    className='flex-1'/>
            </View>
        </View>

            <View>
                <Text className='font-normal'>{originalTitle}</Text>
                <Text className='font-semibold text-2xl'>{title}</Text>
            </View>

        </>

    )
}

export default MovieHeader;