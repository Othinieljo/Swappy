import { StyleSheet, Text, View, TouchableOpacity,TextInput,Button } from 'react-native';
import Circle from '../../components/Circle/Circle';

export default function Connexion () {

    return(
        <View style = {Styles.container}>
         <Circle/>
        
        </View>

    );
}
const Styles = StyleSheet.create({
    container : {
        backgroundColor:'#EBEEEF',
    borderColor:'#707070',
    height:630,
    borderBottomLeftRadius:1000,
    borderTopEndRadius:1,
    borderTopStartRadius:1,
    
    
        

    }
})