import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity,TouchableHighlight } from "react-native";
import { Alert } from "react-native";
import { Pressable } from "react-native"
import { SafeAreaView } from "react-native";
import { StyleSheet,Text,View } from "react-native";

function App()

  const[getContent,setContent]= useState("Content");

const ui = (
  <SafeAreaView style={styles.view1}>
    <StatusBar hidden={false}/>

    <TouchableHighlight onPress={m} activeOpacity={0.85}>
      <View style={styles.btn}>
        <Text style={styles.text1}>Press</Text>
      </View>
    </TouchableHighlight>

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
      color:"#ffffff",
    },
    text2:{
      fontSize:30,
      color:"#0000ff",
      marginTop:20,
    },
    btn:{
      backgroundColor: "#000000",
      paddingHorizontal:20,
      paddingVertical:10,
      borderRadius:12,
      
    }
    
  }
);

export default App;