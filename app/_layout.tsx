import {View, Text} from "react-native";
import '../global.css'
import {NowPlayingAction} from "@/core/actions/movies/now-playing.action";

export default function RootLayout() {

    NowPlayingAction();

  return (
        <View>
            <Text className='text-5xl'>Hola desde RootLayout</Text>
        </View>
  );
}
