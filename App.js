import { Alert } from "react-native";
import {
  Button,
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
} from "react-native";


function App() {
  const ui = (
    <SafeAreaView style={styles.main}>
      <StatusBar hidden={false} />


      <Text style={styles.text1}>Response</Text>
      <Button title="Send Request" onPress={sendRequest} />
    </SafeAreaView>
  );
  return ui;
}

const styles = StyleSheet.create(
  {
    main: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text1: {
      fontSize: 24,
    },
  }
);


function sendRequest() {

  // const Request = new XMLHttpRequest();
  // Request.onreadystatechange = function(){
  //   if(Request.status === 200 && Request.readyState== 4){
  //     const content = Request.responseText;
  //     Alert.alert("PHP Request", content);
  //   }
  // } 
  // Request.open("GET","http://10.0.2.2/php_react1/test.php",true);
  // Request.send();

 fetch("http://10.0.2.2/php_react1/test.php");



  Alert.alert("PHP Request","Success")
}

export default App;