import {View, Image, Text} from "react-native";

const perfil = require('../../../assets/images/PerfilUndefine.png')

const Perfil = ()=> {
    return (
        <View className='flex flex-1 justify-center items-center'>
            <Image source={perfil} style={{
                width: 80,
                height: 80,
                borderRadius: 50,
            }}/>
            <Text className='text-white font-semibold p-4'>Nombre de usuario</Text>
        </View>
    )
}

export default Perfil;