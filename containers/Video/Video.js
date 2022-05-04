import { StyleSheet,View,Text,Image } from "react-native";
import VideoF from "../../components/FlatList/FlatListVideo";

export default function Video(){
    let compteur_v = 324;
    return(
        <View style= {styles.container} >
        <Image
        source={require('../../assets/Ellipse.png')}
        style= {styles.Image} >
            
        </Image>
        <Text style ={styles.text} >Vidéos</Text>
        <Text style = {styles.text1} > {compteur_v} </Text>
        <VideoF/>

    </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        color:'#EBEEEF'
        
    },
    Image: {
        width:"100%",
        top:-280,
    },
    text : {
        color:"#FFFFFF",
        fontSize:40,
        fontFamily:"Arial",
        top:-465,
        textAlign:"center"

    },
    text1 : {
        color:"#FFFFFF",
        fontSize:40,
        fontFamily:"Arial",
        textAlign:"center",
        top:-460


    }
   
    
})