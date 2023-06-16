import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Todo = (props) => {
  const [title, setTitle] = useState("TodoList");
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default Todo;
