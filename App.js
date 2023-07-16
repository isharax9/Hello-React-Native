import { SafeAreaView, StyleSheet, Text, View, StatusBar ,Button ,Pressable,Alert } from "react-native";

function App() {
  const ui = (
    <SafeAreaView style={styles.mainView}>
      <StatusBar hidden={false} />

     
        <Text style={styles.text1}>React Native</Text>

        <Button title="native button" color="#273c75" onPress={test}/>

        <Pressable onPress={test} >
          <View style={styles.btnView}>
             <Text style={styles.btnText}>I'm pressable!</Text>
          </View>  
  
        </Pressable>

      

    </SafeAreaView>
  );

  return ui;
}

const styles = StyleSheet.create
(
  {
    mainView: {
      flex: 1,
      backgroundColor: "#353b48",
      alignItems: "center",
      justifyContent: "center",
    },
    text1: {
      color: "#f5f6fa",
      fontSize: 20,
      marginBottom: 5,
    },
    btnText: {
      color: "#192a56",
      fontSize: 18,
      fontWeight: "bold",
      
    },
    btnView: {
      backgroundColor: "#f5f6fa",
      padding: 10,
      width: 200,
      height: 50,
      borderRadius: 8,
      marginTop: 15,
      justifyContent: "center",
      alignItems: "center",
     
      
    },


  }
);

export default App;


function test(){

  //web alert
  // alert("test going on nawwa");

  //mobile alert
  Alert.alert("Infor to user","test going on nawwa");

}