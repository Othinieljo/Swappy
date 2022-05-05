import { StyleSheet,    SafeAreaView, FlatList,View,Text} from "react-native";


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title:"Assinie"
      
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title:"Yamoussokro"
      
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title:"Man"
      
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title:"Man"
        
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title:"Man"
        
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        title:"Man"
        
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d76',
        title:"Man"
        
      },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
    );
export default function Not() {
    const renderItem = ({ item }) => (
        <Item title={item.title} /> )
    return(
        
           
        
            <SafeAreaView style = {styles.container} >
                <FlatList
                
                numColumns={1}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
    
                />
    
            </SafeAreaView>
        
        
    )
}

const styles = StyleSheet.create({
    container : {
        
        top:3,
        marginTop:20,
        height:346

    },
    item: {
        backgroundColor: '#ffffff',
        marginLeft:1,
        borderRadius:35,
        marginBottom:23,
        borderColor:"#707070",
        borderWidth: 1,
        width:410,
        height:100,
        justifyContent:"center"
      },
      title :{
          fontFamily:"ArialRoundedMT",
          fontSize:25,
          marginLeft:40
      }

          }  )