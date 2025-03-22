import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function SettingScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Detail", { itemId: 42 })}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default SettingScreen;