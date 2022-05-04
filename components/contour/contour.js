import { StyleSheet,View,Text,ImageBackground } from "react-native";



export default function Contour(){
    return(
        <ImageBackground
        source={require('../../assets/Ellipse.png')}
        style = {styles.Img}
        >
            <Text style = {styles.text}>Photos</Text>
        
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    Img : {
        width:"100%",
        height:"100%",
        top:-370
    },
    text : {
        
        fontSize:32,
        top:100
    }
})