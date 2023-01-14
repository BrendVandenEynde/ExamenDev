import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

const CartScreen = ({ navigation, route }) => {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#246EE9' }}>
        <Text style={styles.titel}> 🛒 Winkelkarretje </Text>

        <Text style={styles.naamVoertuig}>{route.params.itemTitle}</Text>
       
  
        <Text style={styles.beschrijving}> 📝 Beschrijving</Text>

        <Text style={styles.tekst}>{route.params.itemDescription}</Text>
  
        <Button
          title="Betalen"
          color="#ef233c"
        />
        
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
      fontSize:40,
      textDecorationLine: 'underline',
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
    },
    tekst: { 
      color:"black",
      fontWeight:"400",
      width: 200,
      backgroundColor: '#FAF9F6',
      borderRadius: 5,
      marginBottom: 15,
    },
    naamVoertuig: {
      color:"white",
      fontWeight:"bold",
      marginTop:"3%",
      marginBottom:"80%",
      fontSize:20,
    }
});

export default CartScreen;