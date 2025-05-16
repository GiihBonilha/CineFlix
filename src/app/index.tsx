import { ScrollView, View } from "react-native";
import { styles } from "./style";
import Header from "../components/Header";
import ListMovie from "../components/ListMovie";
import Movies from "./screens/Movies";


export default function Home() {

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={ styles.container }  >

            <Movies />

        </ScrollView>
    )
}