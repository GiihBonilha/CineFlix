import { View, Text } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import ListMovie from "../../components/ListMovie";


export default function Movies() {

    return (
        <View style={ styles.container }  >

            <Header />

            <ListMovie />
            

        </View>
    )
}