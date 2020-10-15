import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Home';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import Header from './Header';
import Footer from './Footer';
import { navigationRef } from './RootNavigation';
import NewsDetail from './NewsDetail';
import AboutThis from './About';
import Quote from './Quote';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer
      style={{ paddingTop: 50, backgroundColor: '#000' }}
      ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Headforwards"
        headerMode="screen">
        <Stack.Screen
          name="Headforwards"
          component={Homepage}
          options={{
            header: () => <Header headerDisplay="Headforwards" />
          }} />
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetail}
          options={{
            header: () => <Header headerDisplay="News" />
          }} />
        <Stack.Screen
          name="About"
          component={AboutThis}
          options={{
            header: () => <Header headerDisplay="About" />
          }} />
                <Stack.Screen
          name="Quote"
          component={Quote}
          options={{
            header: () => <Header headerDisplay="Quote" />
          }} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}


