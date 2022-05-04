import { StyleSheet,View } from "react-native";
import Login from '../../components/Login/Login';
import Connexion from '../../components/Connexion/Connexion';



export default function ConnexionScreen({navigation}){
    return(
        <View style = {styles.container} >
     
      <Connexion/>
      <Login text="Se connecter" onPress={() => navigation.push('Nom')}/>
      
    
      
    
     
    </View>

    )
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:'#0D0F4A',

    }
})