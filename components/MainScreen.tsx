import React from 'react'
import { Text, View, Icon} from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoviesCom from './MoviesCom'
import TVCom from './TVCom'
import ProfileCom from './ProfileCom'
const Tab = createBottomTabNavigator();
function DetailsScreen() {
    return (
      <View style={{ flex: 1 }}>
       <Text>Details</Text>
      </View>
    );
  }
  function User() {
    return (
      <View style={{ flex: 1 }}>
       <Text>Users</Text>
      </View>
    );
  }
export default function MainScreen() {
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
        {/* <Tab.Screen name="News" children={() => <NewsScreen data={data} nav={navigation}></NewsScreen>} />
        <Tab.Screen name="User" children={() => <ReplaceUserScreen user={user} postCount={userPostCount} totalLike={totalLikeCount}></ReplaceUserScreen>} /> */}
        {/* <Tab.Screen name="User" children={() => <UserScreen user={user} postCount={userPostCount} totalLike={totalLikeCount}></UserScreen>} /> */}
      </Tab.Navigator>
    )
}
