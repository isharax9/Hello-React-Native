import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Image, TextInput } from "react-native";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";

function App() {
  const [getContent, setContent] = useState("Content here");

  const [getText, setText] = useState("");

  const ui = (
    <SafeAreaView style={styles.view1}>
      <StatusBar hidden={false} />

      <TextInput
        style={{
          height: 40,
          width: 200,
          marginBottom: 20,
          borderWidth: 1,
          padding: 5,
          borderColor: "#655aff",
        }}
        value={getText}
        onChangeText={(text) => setText(text)}
      />
      <Pressable onPress={m}>
        <View style={styles.btn}>
          <Text style={styles.text1}>Press</Text>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/9417/9417126.png",
            }}
            style={{ width: 25, height: 25 }}
          />
        </View>
      </Pressable>

      <View>
        <Text style={styles.text2}>{getContent}</Text>
      </View>
    </SafeAreaView>
  );

  function m() {
    setContent(getText);
  }

  return ui;
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 20,
    color: "rgb(82, 92, 232)",
    paddingLeft: 10,
    justifyContent: "center",
  },
  text2: {
    fontSize: 20,
    color: "#0000ff",
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#40c7ff",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
});

export default App;
