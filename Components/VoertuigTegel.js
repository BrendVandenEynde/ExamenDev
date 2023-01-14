import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView, Pressable, SafeAreaView  } from 'react-native';


const VoertuigTile = ({data}) => {
    return (

        <View>
          <Text> Hiii</Text>
          <View style={{ backgroundColor: 'white', height: 350, width: 350, }}>
            <Pressable onPress={console.log(data)}> 
              <Text>

                Hiiiiiiiiiii

              </Text>
            
            
            </Pressable>
          <FlatList
          styles={styles.flat}
          data={data}
          renderItem={({ item }) => { return (   

          <View style={styles.tile}> 
          <View style={styles. tileDetails}>
          <Text style={styles.tileTitle}>{item.title.rendered}</Text>
          <Text> ---------------------------------------------------------</Text>
          <Text  style={styles.titleSubtitle}>{item.excerpt.rendered}</Text> 
          <Button style={styles.button} title="Lees meer" onPress={() => navigation.navigate('Details')} color="#ef233c"/>
           
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
        flex:1,
        borderColor: "black",
     }
       
     

});

export default VoertuigTile;