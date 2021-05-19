import React from 'react'
import { Container, Header, Content, List, ListItem, Text, Left, Body, Right, Title, Icon, Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux'
import { Image, Dimensions ,LogBox} from 'react-native'
import MovieTrend from '../interfaces/movieTrendModel'

export default function ProfileCom() {
    return (
        <Container>
        <Header style={{
            backgroundColor: 'white', marginTop: 50, borderBottomWidth: 0, shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0, elevation: 0
        }}>
            <Body>
                <Title style={{ color: 'black', fontSize: 25, paddingHorizontal: 50 }}>PROFILE</Title>
            </Body>
            <Right >
                {/* <Button hasText transparent> */}
                <Icon name="ios-settings" color="black" style={{ width: null, textAlign: 'center', fontSize: 25 }} />
                {/* </Button> */}
            </Right>
        </Header>
     
        
    </Container>
    )
}
