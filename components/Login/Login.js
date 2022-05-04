import { StyleSheet,View,TextInput,Button } from "react-native";
import FlatButtons from "../../components/Button/buttonCo";
import Circle from '../../components/Circle/Circle';



export default function Login({text , onPress}){
    
    return (
        <View style = {Styles.container}>
             
            <TextInput style = {Styles.textInput} 
            placeholder ="Email" 
            placeholderTextColor="#FFFBFB" />
            <TextInput style = {Styles.textInput} 
            placeholder ="Mot de passe" 
            placeholderTextColor="#FFFBFB" />
            <FlatButtons text = {text}  onPress={onPress} />
            
            
            


        </View>

    );
}
 const Styles = StyleSheet.create({
    container : {
        backgroundColor:"#1E295E",
        borderColor:"#707070",
        borderWidth:1,
        top:-400,
        height:220,
        alignSelf:'stretch',
        borderRadius:30,
        width:360,
        justifyContent:'center',
        marginLeft:19,
        
        
    },
    textInput : {
        fontSize:25,
        fontFamily:'CambriaItalic',
        marginLeft:22,
        alignSelf:'stretch',
        color:'#FFFBFB',
        paddingTop:40,
        paddingBottom:0,
        marginRight:20,
        top:20,
        borderBottomColor:'#000000',
        borderBottomWidth:3,
        justifyContent:"center",
        
        
        
        
        
    }
})