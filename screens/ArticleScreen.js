import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default ArticleScreen = ({ route }) => {
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: article.url }} style={{ marginTop: 20 }} />
    </SafeAreaView>
  );
};
