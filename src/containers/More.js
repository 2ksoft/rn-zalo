import React from "react";
import { StyleSheet, Text, View } from "react-native";

const More = () => {
  return (
    <View style={styles.container}>
      <Text>More</Text>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
