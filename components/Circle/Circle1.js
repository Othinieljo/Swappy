import { StyleSheet,View ,Image,Text} from "react-native";


export default function Circle1 (){
    return (
        <View style = {Styles.Circle} >
            <Image source={require ('../../assets/3.png')} 
            style={Styles.Image}>
            </Image>
            
            </View>

    );
}
const Styles = StyleSheet.create({
    Circle : {
        width : 100,
        height: 100,
        borderRadius:75 ,
        justifyContent:"center",
        marginLeft:157,
        borderWidth:3,
        top:30,
        borderColor:"#FFFCFC",
        
        
    

    },
    Image : {
        height:75 ,
        width: 75,
        marginLeft:11,

    }
})