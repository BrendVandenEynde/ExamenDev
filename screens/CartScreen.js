import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';



const CartScreen = ({ navigation, route }) => {
    return (

        
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#246EE9' }}>
        <Text> Garage Winkelmand </Text>
        <Text style={styles.products}>{route.params.itemTitle}</Text>
        <Text style={styles.products}>{route.params.itemDescription}</Text>
  
        
        <Text style={styles.beschrijving}> Beschrijving</Text>
  
        <Button
          title="Toevoegen aan winkelmand"
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




export default CartScreen;