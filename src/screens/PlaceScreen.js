import { StyleSheet,View,Text } from "react-native";
import SearchBar from "../../components/SearchBar/SearchBar";
import FlatListB from "../../components/FlatList/FlatList";

export default function Place (){
    

    return(
        <View style = {styles.container} >
             <SearchBar/>
             <Text style = {styles.text} >Lieux sans Personne(s)</Text>
             <FlatListB/>
             <Text style = {styles.text1} >Lieux avec Personne(s)</Text>
             <FlatListB style = {styles.FlatListB} />

           
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"#0D0F4A"
    },
    text : {
        top:62,
        color:"#888888",
        marginLeft:25,
        fontSize:25,
        fontFamily:"Arial",
        fontStyle:"italic"
    },
    text1 : {
        top:62,
        color:"#888888",
        marginLeft:25,
        fontSize:25,
        fontFamily:"Arial",
        fontStyle:"italic",
        top:70

    }
})