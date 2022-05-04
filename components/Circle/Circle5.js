import { StyleSheet,View ,Image,Text} from "react-native";


export default function Circle5 (){
    return (
        <View style = {Styles.Circle} >
            <Image source={require ('../../assets/7.png')} 
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
        height:50 ,
        width: 50,
        marginLeft:12,

    }
})