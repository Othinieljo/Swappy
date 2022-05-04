import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,TextInput,Button,useState } from 'react-native';
import { FontDisplay, useFonts } from 'expo-font';
import HomeScreen from './containers/App/App';
import Navigator from './src/navigations/Navigator';
import UserScreen from './containers/User/Users';









const  App = () => {
  const [loaded] = useFonts({
    AgencyFb: require('./assets/fonts/agency-fb.ttf'),
    Cambria : require('./assets/fonts/cambria.ttf'),
    CambriaItalic: require('./assets/fonts/CambriaItalic.ttf'),
    Forte : require('./assets/fonts/Forte.ttf'),
    ArialRoundedMT : require('./assets/fonts/Arial_Rounded_MT.ttf')
    
  });
  
  if (!loaded) {
    return null;
  }
  return(
    <Navigator/>
    
  )
  
   }
   
export default App;

