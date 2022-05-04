import { StyleSheet,Text,View,TextInput,SafeAreaView,Image } from "react-native";
import Not from "../MyNot/Not";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Note() {
    return(
        <View style ={styles.container}>
            <Image
            style ={styles.Img}
            source = {require('./../../assets/search.png')} >
                </Image>
            
            <Not Nom = "Assinie"/>
            <Not Nom = "Yamoussoukro"/>
            <Not Nom = "Man"/>
      
          
         
     
      </View>
    )

}
const styles = StyleSheet.create({
     container : {
         flex:1,
         backgroundColor : "#0D0F4A",
     },
     Img : {
         top:-100
     }
     
     
    
})