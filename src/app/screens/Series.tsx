import { View, Text } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import ListSeries from "../../components/ListSeries";


export default function Series() {

    return (
        <View style={ styles.container }  >

            <Header />

            <ListSeries />            

        </View>
    )
}