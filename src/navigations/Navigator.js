import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/HomeScreen';
import Place from "../screens/PlaceScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../../containers/App/App';
import ConnexionScreen from '../../containers/Connexion/ConnexionScreen';
import UserScreen from '../../containers/User/Users';
import Ionicons from '@expo/vector-icons/Ionicons';
import Photos from "../../containers/App/Photos/Photos";
import Video from "../../containers/Video/Video";
import Music from "../../containers/Music/Music";
import Note from "../../containers/Note/Note";
const Stack = createNativeStackNavigator();
const IdentificationScreen = () => 
    (
        <Stack.Navigator >
          <Stack.Screen name="Rejoignez Swappy" component={HomeScreen} />
          <Stack.Screen name="Connexion" component={ConnexionScreen} />
          <Stack.Screen name ="Nom" component = {UserScreen}
          options={{ headerShown: false }} />
          <Stack.Screen name="Photos" component={Photos} />
          <Stack.Screen name="Video" component={Video} />
          <Stack.Screen name="Music" component={Music} />
          <Stack.Screen name="Mes notes" component={Note} 
          options={{
            
            headerStyle: {
              backgroundColor: '#EBEEEF',
              
              
            },
            headerTintColor: '#1E2285', 
            headerTitleStyle: {
                fontFamily:"ArialRoundedMT",
                fontWeight:"bold",
                fontSize:25,


              }
               }  } />
          </Stack.Navigator>
        
    );
const Tab = createBottomTabNavigator();
 const TabNavigation = () => 
 (
    <Tab.Navigator>
        <Tab.Screen name ='Home' component={HomeScreen}/>
        <Tab.Screen name ='Place' component={Place}/>
        <Tab.Screen name ='User' component={UserScreen}
        />
        <Tab.Screen name ='Photos' component={Photos}
        />

        
    </Tab.Navigator>
 );
export default function Navigator () {
     return (
        <NavigationContainer>
            
            <IdentificationScreen/>
            
        </NavigationContainer>
    );

} 
