import { StyleSheet, Text,StatusBar, View, TouchableOpacity,TextInput,Button,useState } from 'react-native';
import FlatButton from '../../components/Button/button';
import Account from '../../components/Account/Account';


export default function HomeScreen({navigation}){
    
    return (

        <View style={styles.container}>
           
      <Text style = {styles.headerStyle }  >Creer un compte </Text>
      <FlatButton  text="S'inscrire" />
      <Account/>
      <Button
        title="Vous avez déja un compte ?"
        onPress={() => navigation.navigate('Connexion')}
        color ="#FFFFFF" 
        style = {styles.Button}
      />
      
            
      
      
      
      
      
    </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#0D0F4A',
    },
    headerStyle : {
  
        fontSize:42,
        fontFamily:'AgencyFb',
        textAlign:'center',
        top:10,
        color:'#FFFBFB',
      
      
        },
})