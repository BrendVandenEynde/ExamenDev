import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, FlatList, Pressable,Image} from 'react-native';

const VoertuigTile = ({data}) => {
  const navigation = useNavigation();
    return (

        <View>
          <View>
            
          <FlatList
            styles={styles.flat}
            data={data}
            ListFooterComponent={<View style={{height: 80}}/>}
            renderItem={({ item }) => { return (   

            <View style={styles.tile}> 
            <View style={styles. tileDetails}>
            <Text style={styles.tileTitle}>{item.title.rendered}</Text>

            <Text> ---------------------------------------------------------</Text>

            <Image source={{uri: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}} style={{width: 250, height: 200}}/>

            <Text> ---------------------------------------------------------</Text>

            {/*<Text style={styles.titleSubtitle}>{item.excerpt.rendered.substring(3,236)}</Text> */}

            <Pressable style={styles.button} onPress={() => navigation.navigate("Details", {itemTitle: item.title.rendered, itemDescription: item.excerpt.rendered,})}>

                <Text style={styles.leesMeer}>Lees meer</Text>

            </Pressable>
             
          </View>
          </View>

          )
                 
           }}/>

        </View>

      </View>
);
}

const styles = StyleSheet.create({
    tile: {
        width: 270,
        height: 350,
        backgroundColor: '#FAF9F6',
        marginVertical: '3%',
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
        marginBottom: 5,
        color: '#35373A',
      },
      titleSubtitle: {
        fontSize: 14,
        marginBottom: 10,
      },
     flat: {
        backgroundColor: "yellow",
        borderColor: "black",
     },
      button:{
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        padding:"3%",
        backgroundColor: "#0F52BA",
        borderRadius: 10,      
      },
      leesMeer: { 
        color: "white",
        fontWeight:"bold",
      },
      foto: {
        width: 51,
        height: 51,
        resizeMode: 'contain',
      },

});

export default VoertuigTile;