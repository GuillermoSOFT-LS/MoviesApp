import {Text, useWindowDimensions, View} from "react-native";
import InfoSentting from "@/presentation/components/Settings/InfoSentting";
import Perfil from "@/presentation/components/Settings/Perfil";

const Configuracion = ()=>{

    const  {height:ScreenHeight} = useWindowDimensions()


    return (
    <View style={{height:ScreenHeight * 1}} className='bg-[#12100f]'>
        <Text className='p-3 bg-black text-red-700 text-2xl'>Mi cuenta</Text>

        <Perfil />

        <View className='mb-24 px-10'>
            <InfoSentting title='Notificaciones' />
            <InfoSentting title='Email' />
            <InfoSentting title='Contraseña' />
            <InfoSentting title='Borrar Cuenta' />
            <InfoSentting title='Necesitas Ayuda?' />
            <InfoSentting title='Cerrar seccion' />
        </View>

    </View>

)
}

export default Configuracion;