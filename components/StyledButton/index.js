import React, { Component } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const type = props.type;
  const content = props.content;
  const onPress = props.onPress;

  // Destructing ES6
  // const {type, content, onPress} = props;

  const backgroundColor = type === "primary" ? "#171A20CC" : "#E3E3E3";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
