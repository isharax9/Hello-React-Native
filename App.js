import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert } from "react-native";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import { StyleSheet,Text,View } from "react-native";

function App(){

  const[getContent,setContent]= useState("Content");

const ui = (
  <SafeAreaView style={styles.view1}>
    <StatusBar hidden={false}/>

    <Pressable onPress={m}>
      <Text style={styles.text1}>Press</Text>
    </Pressable>

    <View>
      <Text style={styles.text2}>{getContent}</Text>
    </View>



  </SafeAreaView>
);

return ui;

function m(){
  Alert.alert("Message","Content Changed");
  setContent("niyamai");
}

}


const styles = StyleSheet.create(
  {
    view1:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
    },
    text1:{
      fontSize:29,
      color:"rgb(82, 92, 232)",
    },
    text2:{
      fontSize:30,
      color:"#0000ff",
      marginTop:20,
    }
    
  }
);

export default App;