import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Media, Section } from "../../types/types";
import { styles } from "./styles";
import { useRouter } from "expo-router";

type HorizontalListProps = {
    sections: Section;
    type: "movie" | "tv";
}    

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

export default function HorizontalList({ sections, type }: HorizontalListProps) {

    
    const router = useRouter();

    const handleNavigationToDetails = (type: string, id: number) => {
        router.push(`/Details/${type}/${id}`);
    }    
    
    const renderItem = ({ item }: {item: Media}) => (
        <TouchableOpacity style={{ marginRight: 15 }} onPress={() => handleNavigationToDetails(type, item.id) }  >
            <View style={ styles.cardItem }>
            <Image style={ styles.cardImage } 
            resizeMode="cover" source={{ uri: `${BASE_IMAGE_URL}${item.poster_path} ` }} 
             />

            <Text style={ styles.cardTitle } numberOfLines={1} ellipsizeMode="tail" >{ item.name || item.title }</Text>
        </View>

        </TouchableOpacity>
    )

    return (
        <View style={ styles.containerList } >
            <Text style={ styles.titleList } >{ sections.title }</Text>

            <FlatList 
            data={ sections.data }
            renderItem={ renderItem }
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={ styles.list }
            snapToAlignment="start"
            decelerationRate={"fast"}
            snapToInterval={155}

            />
        </View>
    )

}