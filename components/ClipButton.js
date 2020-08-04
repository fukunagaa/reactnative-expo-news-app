import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

const ClipButton = ({ onPress, enable }) => {
  const iconName = enable ? "bookmark" : "bookmark-o";
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome name={iconName} size={40} color="gray" />
    </TouchableOpacity>
  );
};

export default ClipButton;
