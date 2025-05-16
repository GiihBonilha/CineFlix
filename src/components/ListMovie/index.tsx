import { useEffect, useState } from "react";
import { getPopularMovie, getNowPlaying, getTopRated, getUpcomingMovie } from "../../services/themoviedb.service";
import { Media, Section } from "../../types/types";
import HorizontalList from "../HorizontalList";
import { FlatList } from "react-native";


export default function ListMovie() {

    const [ popularMovie, setPopularMovie ] = useState<Media[]>([]);
    const [ nowPlaying, setNowPlaying ] = useState<Media[]>([]);
    const [ topRated, setTopRated ]  = useState<Media[]>([]);
    const [ upcomingMovie, setUpcomingMovie ]  = useState<Media[]>([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataPopularMovie = await getPopularMovie();
                const dataNowPlaying = await getNowPlaying();
                const dataTopRated = await getTopRated();
                const dataUpcomingMovie = await getUpcomingMovie();
    
                setPopularMovie(dataPopularMovie);
                setNowPlaying(dataNowPlaying);
                setTopRated(dataTopRated);
                setUpcomingMovie(dataUpcomingMovie);
                
            } catch (error) {
                console.error('Ocorreu um erro na requisição: ', error)
            }
        }

        fetchData();
    }, [] )

    const sections = [
        { title: 'Populares', data: popularMovie},
        { title: 'Em Cartaz', data: nowPlaying},
        { title: 'Melhores Avaliados', data: topRated},
        { title: 'Em Breve', data: upcomingMovie},
    ]

    const renderSection = ( { item }:{ item:Section } ) => (
        <HorizontalList sections={ item } type="movie"  />
    )


    return (
        
        <FlatList 
        data={ sections }
        renderItem={ renderSection }
        keyExtractor={ (item) =>  item.title }
        />
    )

}