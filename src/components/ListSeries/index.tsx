import { useEffect, useState } from "react";
import { getAiringTodaySeries, getOnTheAirSeries, getPopularSeries, getTopRatedSeries } from "../../services/themoviedb.service";
import { Media, Section } from "../../types/types";
import HorizontalList from "../HorizontalList";
import { FlatList } from "react-native";


export default function ListMovie() {

    const [ airingTodaySeries, setAiringTodaySeries ] = useState<Media[]>([]);
    const [ onTheAirSeries, setOnTheAirSeries ] = useState<Media[]>([]);
    const [ popularSeries, setPopularSeries ]  = useState<Media[]>([]);
    const [ topRatedSeries, setTopRatedSeries ]  = useState<Media[]>([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataAiringTodaySeries = await getAiringTodaySeries();
                const dataOnTheAirSeries = await getOnTheAirSeries();
                const dataPopularSeries = await getPopularSeries();
                const dataTopRatedSeries = await getTopRatedSeries();
    
                setAiringTodaySeries(dataAiringTodaySeries);
                setOnTheAirSeries(dataOnTheAirSeries);
                setPopularSeries(dataPopularSeries);
                setTopRatedSeries(dataTopRatedSeries);
                
            } catch (error) {
                console.error('Ocorreu um erro na requisição: ', error)
            }
        }

        fetchData();
    }, [] )

    const sections = [
        { title: 'Populares', data: popularSeries},
        { title: 'Em exibição hoje', data: airingTodaySeries},
        { title: 'Melhor Avaliadas', data: topRatedSeries},
        { title: 'Em Cartaz', data: onTheAirSeries},
    ]

    const renderSection = ( { item }:{ item:Section } ) => (
        <HorizontalList sections={ item } type="tv"  />
    )


    return (
        
        <FlatList 
        data={ sections }
        renderItem={ renderSection }
        keyExtractor={ (item) =>  item.title }
        />
    )

}