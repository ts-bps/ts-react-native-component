import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Sum } from "./src/main";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Sum a={1} b={2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
