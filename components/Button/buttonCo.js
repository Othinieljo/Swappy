import { StyleSheet, TouchableOpacity,Text,View } from "react-native";


export default function FlatButtons({ text ,onPress } ){
    return(
       <TouchableOpacity onPress = {onPress} >
           <View style = {Styles.Button}>
          
               <Text style={Styles.ButtonText}> {text}</Text>
          
           
        
           </View>
       </TouchableOpacity>
    )

}
const Styles = StyleSheet.create({
    Button :{
      backgroundColor:'#0093DF',
      top:100,
      width:220,
      alignContent:'center',
      borderColor:'#FFFDFC',
      borderRadius:30,
      paddingVertical:7,
      borderWidth:3,
      alignSelf:'center',
      marginBottom:22,
      top:100,
      height:60,
      
      zIndex:5,
      
      
      
      
      


    },
    ButtonText:{
        color:'#FFFBFB',
        fontSize:30,
        fontFamily:'Cambria',
        fontWeight:'900',
        textAlign:'center'
        
        

    },
    
})