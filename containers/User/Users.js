import { StyleSheet,View, Text,Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Place from '../../src/screens/PlaceScreen';
import Home from "../../src/screens/HomeScreen";
import Ionicons from '@expo/vector-icons/Ionicons';


import Circle1 from '../../components/Circle/Circle1';
import Circle2 from '../../components/Circle/Circle2';
import Circle3 from '../../components/Circle/Circle3';
import Circle4 from '../../components/Circle/Circle4';
import Circle5 from '../../components/Circle/Circle5'
import Separator from '../../components/Separator/Separator';



const Tab = createBottomTabNavigator();
   function UserScreen({navigation}){

    return (
        <View style={styles.container}>
         <Text 
         style = {styles.text}>Swappy</Text>
         <Circle1/>
         <Text style = {styles.text1}>Nom</Text>
         <Circle2/>
         <Text 
         onPress={() => navigation.push('Photos')}
         style = {styles.textp} >Photos</Text>
         <Circle3/>
         <Text 
         onPress={() => navigation.push('Video')}style = {styles.textp} >Vidéos</Text>
         <Circle4/>
         <Text 
         onPress={() => navigation.push('Music')}
         style = {styles.textp} >Musique</Text>
         <Circle5/>
         <Text 
         onPress={() => navigation.push('Mes notes')}
         style = {styles.textp} >Notes</Text>
         
         
        </View>
        
    )
}
 export default function TabNavigation(){

  return(

  
    <Tab.Navigator screenOptions={({route}) => ({
        tabBarShowLabel:false,
        BottomShown:false,
        tabBarStyle : { backgroundColor:"#0D0F4A",
        borderTopWidth:1,
        position:"absolute",
        borderColor:"#707070"
        

    },
        tabBarLabel:false,
        tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name == "User"){
                iconName ="person"

            }  else if (route.name =="Place" ){
                iconName='map'
            }
            
            else if (route.name =="Home" ){
                iconName='home'
            }
            return <Ionicons name={iconName}  size = {30}  color="#FFFBFB"/>
        }
    
        
    })}
        
    
    
    
    >   
        <Tab.Screen name="User" component={UserScreen}/>
        <Tab.Screen name ='Home' component={Home}/>
        <Tab.Screen name ="Place" component={Place}/>
        
        

        
    </Tab.Navigator>
    )

}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"#0D0F4A"

    },
    text : {
        fontSize:35,
        fontFamily:"Forte",
        color:"#FFFBFB",
        textAlign:"center",
        top:2,


    },
    text1 : {
        fontSize:25,
        fontFamily:"CambriaItalic",
        color:"#FFFBFB",
        top:30,
        textAlign:"center"

    },
    textp : {
        marginLeft:122,
        top:-38,
        color:"#FFFBFB",
        fontSize:25,
        fontFamily:"CambriaItalic"
    }
})