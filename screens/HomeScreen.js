import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, FlatList, ScrollView } from 'react-native';

import VoertuigTile from '../Components/VoertuigTegel';


const HomeScreen = ({ navigation, route }) => {

  const [voertuigen, setVoertuigen] = useState([]);

  const getVoertuigen = async () => {
    try {
      const response = await fetch(
        "https://brendvandeneynde.be/wp-json/wp/v2/posts?categories=12",
        {}
      );
      const json = await response.json();
      setVoertuigen(json);
      console.log(voertuigen);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVoertuigen();
  }, []);


  return (
 
 
 

 
 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#246EE9', }}>

      <Text style={styles.titel}>De Clueless Garage</Text>
     
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

      <VoertuigTile data={voertuigen} />
     


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
    paddingTop: 20,
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