import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

function App() {
  const ui = (
    <SafeAreaView style={{flex:1}} >
      <StatusBar hidden={false}/>
      <View style={styles.view1}>
        <Text style={styles.text1}>I am</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text1}>Proud to</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text1}>Be a Devans</Text>
      </View>
    </SafeAreaView>
  );

  return ui;
}

const styles = StyleSheet.create({
  text1: {
    color: "rgb(255, 255, 255)",
    fontFamily: "",
    
  },
  view1: {
    backgroundColor: "#111e3c",
    flex: 1,
    justifyContent:"flex-start",
    alignItems:"center",

  },
  view2:{
    backgroundColor:"#ecc036",
    flex: 1
  },
  view3:{
    backgroundColor:"#4f0b13",
    flex: 1
  },

});

export default App;
