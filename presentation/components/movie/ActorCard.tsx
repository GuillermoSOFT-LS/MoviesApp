import { Image, Text, View } from 'react-native';
import {Cast} from "@/Infrastructure/interfaces/Cast";

interface Props {
    actor: Cast;
}

export const ActorCard = ({ actor }: Props) => {
    return (
        <View className="mx-10 w-[60px]">
            <Image
                source={{uri: actor.avatar}}
                className="w-[100px] h-[150] rounded-2xl shadow"
                resizeMode="cover"
            />

            <View>
                <Text
                    numberOfLines={2}
                    adjustsFontSizeToFit
                    className="font-bold text-[15px] text-white"
                >
                    {actor.name}
                </Text>
                <Text className="text-[#c6c4c4]">{actor.character}</Text>
            </View>
        </View>
    )
}