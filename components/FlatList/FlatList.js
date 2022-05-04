import { StyleSheet,    SafeAreaView, FlatList,View,Text} from "react-native";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );


export default function FlatListB({ dimension }){
    const renderItem = ({ item }) => (
        <Item title={item.title} /> )
       
    return(
        <SafeAreaView style = {styles.container} >
            <FlatList
            horizontal
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}

            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:"#FFFFFF",
        height:200,
        borderRadius:33,
        top: 62,
        marginTop:20

    },
    item: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginVertical: 16,
        marginHorizontal: 16,
        borderColor:"#707070",
        borderWidth: 1,
        width:146,

        borderRadius:25,
        height:150,
        justifyContent:"center"
      },
      title: {
        fontSize: 32,
      },
    
    
})