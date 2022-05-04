import { StyleSheet,View ,Image,Text} from "react-native";


export default function Circle2 (){
    return (
        <View style = {Styles.Circle} >
            <Image source={require ('../../assets/4.png')} 
            style={Styles.Image}>
            </Image>
            
            </View>

    );
}
const Styles = StyleSheet.create({
    Circle : {
        width : 80,
        height: 80,
        borderRadius:75 ,
        justifyContent:"center",
        marginLeft:15,
        borderWidth:3,
        top:20,
        backgroundColor:'#FFFBFB',
        borderColor:"#FFFCFC",
        
        
    

    },
    Image : {
        height:65 ,
        width: 65,
        justifyContent:"center"

    }
})