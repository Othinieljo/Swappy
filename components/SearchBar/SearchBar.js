import { FontDisplay } from "expo-font";
import { StyleSheet,View,TextInput,Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SearchBar(){
    return(
        <View style = {styles.container} >
            <TextInput style = {styles.TextInput}
            placeholder="Rechercher"
            placeholderTextColor="#888888"
            />
            <Image
        source={require('../../assets/back.png')}
        fadeDuration={0}
        
        style={{ width: 30, height: 30,
            justifyContent:"center",
            top:3
        
        }}
      /><Image
      source={require('../../assets/micro.png')}
      fadeDuration={0}
      style={{ width: 30, height: 30,
          justifyContent:"center",
          marginLeft:340,
          top:-25
      
      }}
    />
        

            

        </View>

    )
}
const styles = StyleSheet.create({
    container : {
        backgroundColor:"#FFFFFF",
        top:40,
        height:57,
        borderRadius:29,
        width:"90%",
        justifyContent:"center",
        marginLeft:15


    },
    TextInput : {
        marginLeft:52,
        fontFamily:"Arial",
        fontStyle:"italic",
        fontSize:20,
        top:30,
    }
})