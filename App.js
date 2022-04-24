import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Homepage from './components/Home';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';


const Stack = createStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      <NavigationContainer
        // did not work
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
      >
        {/* works fine */}
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
  
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
