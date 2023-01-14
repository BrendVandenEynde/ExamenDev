
import { StyleSheet, Text, View, Image, Button } from 'react-native';


const VoertuigTile = (props) => {
    return (

        <View>
            <View style={styles.tile}> 
                    <View style={styles. tileDetails}>
                    <Text style={styles.tileTitle}>{props.title}</Text>
                    <Text> ---------------------------------------------------------</Text>
                    <Text  style={styles.titleSubtitle}>{props.titleSubtitle}</Text> 
                    <Button style={styles.button} title="Lees meer" onPress={() => navigation.navigate('Details')} color="#ef233c"/>
          </View>
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

      button: {
          

      }
       
     

});

export default VoertuigTile;