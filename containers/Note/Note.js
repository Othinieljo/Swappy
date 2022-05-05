import { StyleSheet,Text,View,TextInput,SafeAreaView,Image } from "react-native";
import Not from "../MyNot/Not";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Note() {
    return(
        <View style ={styles.container}>
            <Image
            style ={styles.Img}
            source = {require('./../../assets/search.png')} >
                </Image><Image
            style ={styles.Img1}
            source = {require('./../../assets/ellipsis.png')} >
                </Image>
                <Image
            style ={styles.Img2}
            source = {require('./../../assets/settings.png')} >
                </Image>
                <Image
            style ={styles.Img3}
            source = {require('./../../assets/plus.png')} >
                </Image>
            
            <Not />
            
          
         
     
      </View>
    )

}
const styles = StyleSheet.create({
     container : {
         flex:1,
         backgroundColor : "#0D0F4A",
     },
     Img : {
         height:30,
         width:30,
         marginLeft:320,
         top:24


     },
     Img1 : {
         height:30,
         width:30,
         top:-5,
         marginLeft:385
     },
     Img2 : {
         height:30,
         width:30,
         top:-37,
         marginLeft:10
     },
     Img3 : {
         height:50,
         width:50,
         top:520,
         marginLeft:350

     }
     
     
    
})