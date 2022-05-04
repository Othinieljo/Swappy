import { StyleSheet,View,Image,Text} from "react-native";
import Contour from "../../../components/contour/contour";
import PhotoF from "../../../components/FlatList/FlatListPhoto";


export default function Photos(){
    let compteur = 544;
    return(
        <View style= {styles.container} >
            <Image
            source={require('../../../assets/Ellipse.png')}
            style= {styles.Image} >
                
            </Image>
            <Text style ={styles.text} >Photos</Text>
            <Text style = {styles.text1} > {compteur} </Text>
            <PhotoF/>

        </View>
    )
}
const styles = StyleSheet.create({
    container : {
       flex:1,
        
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