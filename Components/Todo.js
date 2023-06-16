import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Todo = (props) => {
  return (
    <View style={[styles.item, { margin: 8, padding: 8 }]}>
      <Text>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColorl: "whitesmoke",
  },
});

export default Todo;
