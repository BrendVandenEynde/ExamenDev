import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView } from 'react-native';

import VoertuigTile from '../Components/VoertuigTegel';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#246EE9', }}>

      <Text style={styles.titel}>De Clueless Garage</Text>
      <ScrollView>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        color="#ef233c"
      />
      <Button
        title="go to About"
        onPress={() => navigation.navigate('About')}//-> gaat naar About
        color="#ef233c"
      />

          <View style={styles.tilesContainer}>

          <Text  style={styles.tussenTitels}>Scooters en Motoren</Text>
          <VoertuigTile title="Development 3" />
          <VoertuigTile  title="Creatie 2" />
          <VoertuigTile  title="Ondernemerschap 2" />

          <Text style={styles.tussenTitels}>Wagens</Text>
          <VoertuigTile  title="Creatie 3" />
          <VoertuigTile  title="Creatie 3" />
          <VoertuigTile  title="Creatie 3" />

          <Text style={styles.tussenTitels}>Elektrische Wagens</Text>
          <VoertuigTile  title="Creatie 3" />
          <VoertuigTile  title="Creatie 3" />
          <VoertuigTile  title="Creatie 3" />

          </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titel: {
    color:"white",
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:"5%",
    fontSize:30,
    textDecorationLine: 'underline',
  },
  tussenTitels: {
    color:"white",
    fontWeight:"bold",
    fontSize:20,
    marginTop:"3%",
    marginBottom: "1%"
  }


});
export default HomeScreen;