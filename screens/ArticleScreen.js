import React from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch } from "react-redux";
import { addClip, deleteClip } from "../store/actions/user";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default ArticleScreen = ({ route }) => {
  const { article } = route.params;

  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(addClip({ clip: article }));
        }}
      >
        <Text style={{ margin: 10, fontSize: 10 }}>ADD CLIP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(deleteClip({ clip: article }));
        }}
      >
        <Text style={{ margin: 10, fontSize: 10 }}>DELETE CLIP</Text>
      </TouchableOpacity>
      <WebView source={{ uri: article.url }} style={{ marginTop: 20 }} />
    </SafeAreaView>
  );
};
