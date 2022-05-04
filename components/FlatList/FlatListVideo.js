import { StyleSheet,    SafeAreaView, FlatList,View,Text} from "react-native";


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d76',
        
      },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
    );
export default function VideoF() {
    const renderItem = ({ item }) => (
        <Item title={item.title} /> )
    return(
        
           
        
            <SafeAreaView style = {styles.container} >
                <FlatList
                numColumns={2}
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
        height:400,
        borderRadius:33,
        top:-380,
        marginTop:20

    },
    item: {
        backgroundColor: '#ffffff',
        padding: 10,
        
        
        borderColor:"#707070",
        borderWidth: 1,
        width:207,
        height:175,
        justifyContent:"center"
      },

          }  )