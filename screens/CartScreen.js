import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

const CartScreen = ({ navigation, route }) => {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#246EE9' }}>

        <Text style={styles.titel}> 🛒 Winkelkarretje </Text>

        <Text style={styles.naamVoertuig}>{route.params.itemTitle}</Text>

        <Image source={{uri: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}} style={{width: 350, height: 200, marginBottom: 20,}}/>
    
        <Text style={styles.beschrijving}> 📝 Beschrijving</Text>

        <Text style={styles.tekst}>{route.params.itemDescription.substring(3,236)}</Text>
  
        <Button title="Betalen" color="#ef233c"/>
        
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
      marginBottom: 20,
      fontSize:20,
    },
});

export default CartScreen;