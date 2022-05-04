import { StyleSheet, TouchableOpacity,Text,View,TextInput} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


export default function Account(){
    return(
        
            <View style = {Styles.Account} >
                <TextInput style = {Styles.textInput} placeholder="Nom" placeholderTextColor='#FFFBFB' 
                />
                <TextInput style = {Styles.textInput} placeholder="Prenom"
                placeholderTextColor='#FFFBFB' 
                />
                <TextInput style = {Styles.textInput} placeholder="Age"
                placeholderTextColor='#FFFBFB' 
                />
                <TextInput style = {Styles.textInput} placeholder="Email"
                placeholderTextColor='#FFFBFB' 
                />
                <TextInput style = {Styles.textInput} placeholder="Pays" 
                placeholderTextColor='#FFFBFB'
                />
                <TextInput style = {Styles.textInput} placeholder="CNI/Passeport"
                placeholderTextColor='#FFFBFB' 
                />
                

            </View>
            
        

    );
}

const Styles = StyleSheet.create({
    Account : {
        top:-50,
        width:350,
        height:500,
        
         
        
        alignSelf:'stretch'
        
        
        
    },
    textInput:{
        fontSize:25,
        fontFamily:'CambriaItalic',
        marginLeft:22,
        top:12,
        alignSelf:'stretch',
        color:'#FFFBFB',
        paddingBottom:10,
        marginBottom:40,
        borderBottomColor:'#000000',
        borderBottomWidth:3,
        fontStyle:'italic',
        
        

      }    
})