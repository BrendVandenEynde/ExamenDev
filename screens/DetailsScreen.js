import React from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';

const DetailsScreen = ({ navigation, route }) => {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#246EE9' }}>

      <Text style={styles.products}>{route.params.itemTitle}</Text>
      <Text style={styles.products}>{route.params.itemDescription}</Text>

      <Text style={styles.beschrijving}> Beschrijving</Text>

      <Pressable
      style={styles.button}
      onPress={() =>
        navigation.navigate("Karretje", {
          itemTitle: route.params.itemTitle,
          itemDescription: route.params.itemDescription,
        })
      }>
        <Text> Toevoegen aan karretje</Text>
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
  titel: {
    color:"white",
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:"5%",
    fontSize:30,
    textDecorationLine: 'underline',
  },
  beschrijving: {
    color:"white",
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:"5%",
    fontSize:20,
  },
  button:{
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',      
      }
});

export default DetailsScreen;