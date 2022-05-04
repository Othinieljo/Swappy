import { View,Text,StyleSheet } from "react-native";


export default function Not({Nom}){
    return (
        <View style = {styles.container}>
            <Text style = {styles.text} > {Nom} </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
    backgroundColor : '#FFFFFF',
    top:80,
    height:90,
    borderRadius:36,
    marginBottom:32
    },
    text : {
        fontFamily:'ArialRoundedMT',
        fontSize:25,
        marginTop:23,
        marginLeft:15,
        
        
        
        
    }

})