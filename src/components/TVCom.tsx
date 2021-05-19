import React from 'react'
import { Container, Header, Content, List, ListItem, Text, Left, Body, Right, Title, Icon, Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux'
import { Image, Dimensions ,LogBox} from 'react-native'
import MovieTrend from '../interfaces/movieTrendModel'



LogBox.ignoreLogs([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

export default function TVCom() {
    const windowWidth = Dimensions.get('window').width;
    const listMovie: IMovieState = useSelector((state: IAllState) => state.movies)
    const listBackdrop: Array<MovieTrend> = listMovie.listMoviesTrend.slice(0, 3)
    const listPoster: Array<MovieTrend> = listMovie.listTVPopular.slice(0, 5)
    const listPosterPop: Array<MovieTrend> = listMovie.listTVPopular.slice(5, 20)
    return (
        <Container>
        <Header style={{
            backgroundColor: 'white', marginTop: 50, borderBottomWidth: 0, shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0, elevation: 0
        }}>
            <Body>
                <Title style={{ color: 'black', fontSize: 25, paddingHorizontal: 50 }}>TV</Title>
            </Body>
            <Right >
                {/* <Button hasText transparent> */}
                <Icon name="ios-search" color="black" style={{ width: null, textAlign: 'center', fontSize: 25 }} />
                {/* </Button> */}
            </Right>
        </Header>
        <Content style={{ borderWidth: 0 }} >
            {/* <List horizontal={true} dataArray={listBackdrop} // your array should go here
                renderRow={pet => ( 
                    <ListItem style={{ borderBottomWidth: 0 }}>
                        <Image style={{ width: windowWidth - 30, height: 200, borderRadius: 20 }} source={{ uri: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/' + pet.backdrop_path }}></Image>
                    </ListItem>
                )}>
            </List> */}
            {/* <Text style={{ paddingLeft: 20 }}>NOW</Text> */}
            <List horizontal={true} dataArray={listPoster} // your array should go here
                    renderRow={pet => (
                        <ListItem style={{ borderBottomWidth: 0, flexDirection: 'column' }}>
                            <Image style={{ width: 150, height: 200, borderRadius: 20 }} source={{ uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + pet.poster_path }}></Image>
                            <Text style={{ width: 150, textAlign: 'center', height: 50, color:'black' }}>{pet.original_name}</Text>
                        </ListItem>
                    )}>
                </List>
            <Text style={{ paddingLeft: 20 }}>POPULAR</Text>
            <List dataArray={listPosterPop} // your array should go here
                renderRow={pet => (
                    <ListItem style={{ borderBottomWidth: 0, flexDirection: 'column' }}>
                        <Image style={{ width:windowWidth - 30, height: 200, borderRadius: 20 }} source={{ uri:'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/' + pet.backdrop_path }}></Image>
                        <Text style={{ width: windowWidth - 30, height: 50 }}>{pet.original_name}</Text>
                    </ListItem>
                )}>
            </List>
        </Content>
        
    </Container>
    
    )
}
