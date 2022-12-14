import React,{useEffect} from 'react'
import { Text, View, Icon} from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoviesCom from './MoviesCom'
import TVCom from './TVCom'
import ProfileCom from './ProfileCom'
import {useDispatch, useSelector} from 'react-redux'
import { GET_MOVIES } from '../actions/actionTypes';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
    const dispatch = useDispatch();
    const listMovie: IMovieState = useSelector((state: IAllState) => state.movies)
    useEffect(() => {
        dispatch({
            type:GET_MOVIES,
            payload: []
        })     
    },[])

    
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'MOVIES') {
                  iconName = focused ? 'ios-film' : 'ios-film-outline';
                } else if (route.name === 'TV') {
                  iconName = focused ? 'ios-desktop' : 'ios-desktop-outline';
                }
                else if(route.name === "Profile"){
                  iconName = focused ? 'ios-person-circle-outline' : 'ios-person-circle-outline';
                  
                }
    
                // You can return any component that you like here!
                return <Icon name={iconName} color={color} />;
              },
        })}
        tabBarOptions={{
          activeTintColor: '#ccc',
          inactiveTintColor: 'gray'
        }}
      >
          <Tab.Screen name="MOVIES" children={() => <MoviesCom ></MoviesCom>} />
          <Tab.Screen name="TV" children={() => <TVCom></TVCom>} />
          <Tab.Screen name="Profile" children={() => <ProfileCom></ProfileCom>} />
      </Tab.Navigator>
    )
}
