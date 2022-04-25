import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Homepage from './components/Home';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import Footer from './components/Footer';
import { navigationRef } from './RootNavigation';
import NewsDetail from './components/NewsDetail';


const Stack = createStackNavigator();

export default function App() {

  // react hook
  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      <NavigationContainer
        ref={navigationRef}
      >
        <StatusBar translucent backgroundColor="transparent" />
        
        <Stack.Navigator 
          initialRouteName='Globomantics'
          screenOptions={{
            headerMode: 'screen'
          }}
        >
  
          <Stack.Screen
            name='Globomantics'
            component={Homepage}
            options={{
              header: () => <Header headerDisplay="Globomantics" />
            }}
          />
          <Stack.Screen
            name='NewsDetail'
            component={NewsDetail}
            options={{
              header: () => <Header headerDisplay="News" />
            }}
          />
  
        </Stack.Navigator>
        <Footer/>
      </NavigationContainer>
    );
  }
}
