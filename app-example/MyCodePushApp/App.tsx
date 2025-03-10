import React from "react";
import { View, Text, Button } from "react-native";
import CodePush from "react-native-code-push";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello, CodePush V1.2!</Text>
      <Button title="Check for Update" onPress={() => CodePush.sync()} />
    </View>
  );
};

// Configure CodePush options
const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START, // Check for updates when app starts
};

export default CodePush(codePushOptions)(App);
