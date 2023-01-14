import React from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';

const DetailsScreen = ({ navigation, route }) => {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#246EE9' }}>

      <Text style={styles.naamVoertuig}>{route.params.itemTitle}</Text>

      <Text style={styles.beschrijving}> 📝 Beschrijving</Text>

      <Text style={styles.tekst}>{route.params.itemDescription}</Text>

      <Pressable
      style={styles.button}
      onPress={() =>
        navigation.navigate("Karretje", {
          itemTitle: route.params.itemTitle,
          itemDescription: route.params.itemDescription,
        })
      }>
        <Text style={styles.button}> Toevoegen aan karretje</Text>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  beschrijving: {
    color:"white",
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:"2%",
    fontSize:20,
  },
  button:{
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        color: 'white',
        backgroundColor: "green",
        padding:"1%",
        fontWeight:"bold",
  },
  naamVoertuig: { 
      color:"white",
      fontWeight:"bold",
      fontSize:35,
      paddingBottom: 400,
  },
  tekst: { 
    color:"black",
    fontWeight:"400",
    width: 200,
    backgroundColor: '#FAF9F6',
    borderRadius: 5,
    marginBottom: 15,
  },

});

export default DetailsScreen;