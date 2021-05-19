import React, { useEffect, useState } from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from 'react-native-onboarding-swiper';
import AppIntroSlider from "react-native-app-intro-slider";
import AsyncStorage from '@react-native-community/async-storage';
import LoginCom from './components/LoginCom'
import SignUpCom from './components/SignUpCom'
import MainScreen from './components/MainScreen'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import moviesSaga from './sagas/moviesSaga'
import allReducer from './reducers/allReducers'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(allReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(moviesSaga)

const slides = [
  {
    key: "one",
    title: "JUST TRAVEL",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./images/02.png"),
  },
  {
    key: "two",
    title: "TAKE A BREAK",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./images/03.png"),
  },
  {
    key: "three",
    title: "ENJOY YOUR JOURNEY",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./images/04.png"),
  },
];

function HomeScreen({ navigation }) {
  const [isFirstTime, setIsFirstTime] = useState(true)
  useEffect(() => {
    AsyncStorage.getItem('isFirst').then(
      value => {
        if (value == null) {
          AsyncStorage.setItem('isFirst', 'true')
          setIsFirstTime(true)
          console.log('first');
        }
        else {
          setIsFirstTime(false)
          console.log('nah');
        }
      }
    )
  }, [])
  const _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
            height: "100%",
            width: "100%",
          }}
        />

      </View>
    );
  };
  if (isFirstTime) {
    return (
     
        <View style={{ flex: 1 }}>
          <AppIntroSlider
            renderItem={_renderItem}
            data={slides}
            onDone={() => {
              navigation.navigate('Details')
            }}
          />
        </View>
     
    );
  }
  else {
    return (
    
        <View style={{ flex: 1 }}>
          <LoginCom ></LoginCom>
        </View>
    

    );
  }
}


function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 1000)
  })
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("./images/01.png")}
        style={{
          resizeMode: "cover",
          height: "100%",
          width: "100%",
        }}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
   <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={LoginCom} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpCom} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
   </Provider>
  );
}

export default App;
