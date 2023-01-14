import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, FlatList, Pressable} from 'react-native';

const VoertuigTile = ({data}) => {
  const navigation = useNavigation();
    return (

        <View>
          <View style={{ backgroundColor: 'white' }}>
            
          <FlatList
            styles={styles.flat}
            data={data}
            renderItem={({ item }) => { return (   

            <View style={styles.tile}> 
            <View style={styles. tileDetails}>
            <Text style={styles.tileTitle}>{item.title.rendered}</Text>
            <Text> ---------------------------------------------------------</Text>
            <Text  style={styles.titleSubtitle}>{item.excerpt.rendered}</Text> 

            <Pressable
                style={styles.button}
                onPress={() =>
                  navigation.navigate("Details", {
                    itemTitle: item.title.rendered,
                    itemDescription: item.excerpt.rendered,
                  })
                }
              >
                <Text>Lees meer</Text>
              </Pressable>
            
            </View>
            </View>
          )
                        
           }}
          />

        </View>

        </View>
);
}

const styles = StyleSheet.create({
    tile: {
        width: 250,
        height: 200,
        backgroundColor: '#E3DFD5',
        marginVertical: '1.50%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 30,
      },
      tileImg:{
        width: '100%',
        height: 110,
      },
      tileDetails: {
        padding: 10,
      },
      tileTitle:{
        fontSize: 18,
        marginTop: 12,
        marginBottom: -20,
        color: '#35373A',
      },
      titleSubtitle: {
        fontSize: 14,
      },
     flat: {
        backgroundColor: "yellow",
        flex:2,
        borderColor: "black",
     },
      button:{
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',      
      }

});

export default VoertuigTile;