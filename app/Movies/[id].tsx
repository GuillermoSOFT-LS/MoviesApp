import {Text, View} from "react-native";
import {getMovieByIdAction} from "@/core/actions/movie/get-movie-by-id.action";
import {id} from "postcss-selector-parser";

const MoviesScreen=()=> {

    getMovieByIdAction(+id)

    return (
        <View>
            <Text>Hola desde detalle movie</Text>
        </View>
    )
}

export default MoviesScreen