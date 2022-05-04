import { StyleSheet,View } from "react-native";

export default function Rectangle(){
    return (
        <View style = {Styles.Rectangle}>

        </View>

    );
}
const Styles = StyleSheet.create({
    Rectangle:{
         borderColor:'#707070',
         borderWidth:1,
        marginLeft:15,
        borderRadius:30,
        top : -500,
        width:380,
        height:500,
        backgroundColor:'#A1FFFC',
        opacity:0.1,
    }
})