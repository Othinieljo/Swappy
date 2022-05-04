import { StyleSheet,View ,Image} from "react-native";


export default function Circle (){
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
        width : 150,
        height: 150,
        borderRadius:75 ,
        justifyContent:"center",
        marginLeft:130,
        borderWidth:1,
        top:60,
        borderColor:"#707070",
        
        
    

    },
    Image : {
        height:100 ,
        width: 100,
        marginLeft:25,

    }
})