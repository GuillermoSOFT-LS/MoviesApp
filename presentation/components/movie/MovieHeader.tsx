import {Pressable, Text, useWindowDimensions, View} from "react-native";
import {Image} from "expo-image";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import {LinearGradient} from "expo-linear-gradient";


interface Props {
    poster: string
    originalTitle: string
    title: string
}

const MovieHeader = ({poster,originalTitle,title}:Props)=> {

    const  {height:screenHeight} = useWindowDimensions()
    return (
        <>

            <LinearGradient
                colors={['rgba(0,0,0,1)','transparent']}
                start={[0,0]}
                style={{
                height:screenHeight  * 0.4,
                position: 'absolute',
                width: '100%',
            }}/>

            <View style={{
                position: 'absolute',
                zIndex: 99,
                elevation: 3,
                top: 15,
                left: 10,
                borderBottomEndRadius: 25

            }}>
                <Pressable onPress={()=> router.dismiss()}>
                    <Ionicons name='arrow-back'
                              size={30}
                              color='white'
                    />
                </Pressable>
            </View>
            <View style={{height: screenHeight * 0.7}}
                className='shadow-xl sha shadow-black/20 rounded-b-[25px]'>
            <View className='flex-1 rounded-b-[25px] overflow-hidden'>
                <Image
                    source={{uri: poster}}
                    resizeMode="cover"
                    className='flex-1'/>
            </View>
        </View>

            <View className='p-4'>
                <Text className='font-normal text-white'>{originalTitle}</Text>
                <Text className='font-semibold text-2xl text-white'>{title}</Text>
            </View>

        </>

    )
}

export default MovieHeader;