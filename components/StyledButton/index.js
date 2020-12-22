import React, { Component } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

export class StyledButton extends Component {
  render() {
    return (
      <View>
        <Pressable
          style={styles.button}
          onPress={() => {
            console.warn("I'm being pressed!");
          }}
        >
          <Text>Custom Order</Text>
        </Pressable>
      </View>
    );
  }
}

export default StyledButton;
