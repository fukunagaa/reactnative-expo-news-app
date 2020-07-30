import React from "react";
import { StyleSheet, View } from "react-native";
import ListItem from "./components/ListItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl="https://picsum.photos/200/300"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        auther="Sample News"
      />
      <ListItem
        imageUrl="https://picsum.photos/200/300"
        title="Hellow News."
        auther="React News"
      />
      <ListItem
        imageUrl="https://picsum.photos/200/300"
        title="Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        auther="Sample News"
      />
    </View>
  );
}
