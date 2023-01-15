import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image} from 'react-native';


const DetailsScreen = ({ navigation, route }) => {

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(3);

  const increase = () => {
    if (counter2 > 0) {
      setCounter((currentCounter) => currentCounter + 1);
      setCounter2((currentCounter2) => currentCounter2 - 1);
    }
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((currentCounter) => currentCounter - 1);
      setCounter2((currentCounter2) => currentCounter2 + 1);
    }
    if (counter == 0) {
      counter + 0;
    }
    if (counter2 == 5) {
      counter2 + 0;
    }
  };

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#246EE9' }}>

      <Text style={styles.naamVoertuig}>{route.params.itemTitle}</Text>

      <Image source={{uri: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}} style={{width: 350, height: 200, marginBottom: 20,}}/>


      <Text style={styles.beschrijving}> 📝 Beschrijving</Text>

      <Text style={styles.tekst}>{route.params.itemDescription.substring(3,236)}</Text>

      <View>

      <View style={styles.shoppingcart}>

            <Image style={styles.icon} source={{uri: "https://cdn-icons-png.flaticon.com/512/1571/1571991.png",}}/>

            <Text style={styles.number}>{counter}</Text>

      </View>

        <Pressable  onPress={() => {increase();}}> 

          <Text style={styles.buttonPlus}>Toevoegen aan karretje</Text>

        </Pressable>

        <Pressable onPress={() => {decrease();}}>

          <Text style={styles.buttonMin}>Verwijderen uit karretje</Text>

        </Pressable>

      </View>

      <Pressable
      style={styles.button}
      onPress={() =>
        navigation.navigate("Karretje", {
          itemTitle: route.params.itemTitle,
          itemDescription: route.params.itemDescription,
        })
      }>
        <Text style={styles.button}> Winkelkarretje</Text>
      </Pressable>
      
    </View>

  )};
      

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
        backgroundColor: "red",
        padding:"1%",
        margin:"1%",
        fontWeight:"bold",
        borderRadius: 20,
  },
  naamVoertuig: { 
      color:"white",
      fontWeight:"bold",
      fontSize:35,
      paddingBottom: 25,
  },
  tekst: { 
    color:"black",
    fontWeight:"400",
    width: 200,
    backgroundColor: '#FAF9F6',
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonPlus:{
    justifyContent: 'center',
    textAlign:"center",
    marginRight: 'auto',
    marginLeft: 'auto',
    color: 'white',
    backgroundColor: "#FF5F1F",
    padding:"1%",
    margin:"1%",
    fontWeight:"bold",
    width: 160,
    borderRadius: 20,

},
buttonMin:{
  justifyContent: 'center',
  textAlign:"center",
  marginRight: 'auto',
  marginLeft: 'auto',
  color: 'white',
  backgroundColor: "#FF5F1F",
  padding:"1%",
  margin:"1%",
  fontWeight:"bold",
  width: 160,
  borderRadius: 20,
},
icon: {
  height: 40,
  width: 40,
  marginTop: 8,
  justifyContent: 'center',
  textAlign:"center",
},
number: {
  color: 'white',
  fontWeight:"bold",
},
});

export default DetailsScreen;